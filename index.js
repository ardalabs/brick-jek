const express = require('express');
const app = express()
const converter = require('json-2-csv');
const port = 3000;
const fs = require('fs');
var gojek = require('./module.js');
app.get('/', (request, response) => {
    response.json({
        chance: request.chance,
        message: "Hello from Express!"
    })
})
app.post('/login', (request, response) => {
    var phone = request.header('phone');
    console.log(phone);
    gojek.loginWithPhone(phone, function (err, res, body) {
        response.json({
            phone: phone,
            body: body
        })
    });
});

app.get('/balance', (request, response) => {
    gojek.getGoPayDetail(function (err, res, body) {
        response.json({
            body: body
        })
    });
});

app.get('/profile', (request, response) => {
    gojek.getCustomerInfo(function (err, res, body) {
        gojek.setUserProfile(body.customer);
        response.json({
            body: body
        })
    });
});
app.get('/transaction', (request, response) => {
    gojek.getGoPayHistory(1, 100, function (err, res, body) {
        response.json({
            body:  normalizeData(gojek.getUserProfile(),body.data.success)
        })
    });
});

app.post('/verify', (request, response) => {
    var pin = request.header('otp');
    var token = request.header('token');
    gojek.generateCustomerToken(pin, token, function (err, res, body) {
        if (body.access_token) {
            /**
             * store it into the function/variable
             * var to store: token and also otp pin
             * seems gojek always use like this
             */
            gojek.setToken(body.access_token);
            gojek.setPin(pin);
        }
        console.log(gojek);
        response.json({
            pin: pin,
            token: token,
            body: body
        })
    });
})
//# main section
app.listen(port, (err) => {
    if (err) {
        return console.log('something bad happened', err)
    }
    console.log(`server is listening on ${port}`)
})

function normalizeData(currentUser, list) {
    const currentDate = new Date();
    const currentDateTime = currentDate.getTime();
    const last30DaysDate = new Date(currentDate.setDate(currentDate.getDate() - 30));
    console.log(last30DaysDate);
    const last30DaysDateTime = last30DaysDate.getTime();
    var arrayNormalized = [];
    var data = list.filter(x => {
        const elementDateTime = new Date(x.transacted_at).getTime();
        console.log(elementDateTime);
        if (elementDateTime <= currentDateTime && elementDateTime > last30DaysDateTime) {
            ///do normalized
            x['trx_id'] = x['transaction_ref'];
            x.account_id = currentUser.id;
            x.account_name = currentUser.name;
            x['remark'] = x['description'];
            x['last_known_balance'] = x['effective_balance_after_transaction'];
            delete x['effective_balance_after_transaction'];
            delete x['transaction_ref'];
            delete x['description'];
            delete x['status'];
            arrayNormalized.push(x);
            return true;
        }
        return false
    })
    converter.json2csv(arrayNormalized, (err, csv) => {
        if (err) {
            throw err;
        }
    
        // print CSV string
        fs.writeFileSync(`${new Date()}-transaction.csv`, csv);
        console.log(csv);
    });

    return arrayNormalized;
}