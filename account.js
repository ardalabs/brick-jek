var request = require('./request');
var config = require('./config');

module.exports = {
    loginWithPhone: function (phone, callback) {
        var options = {
            method: 'POST',
            body: {
                country_code:'+62',
                phone_number: phone,
                client_id: config.getClientId(),
                client_secret: config.getClientSecret(),
            }
        };

        request._request_goid(options, '/goid/login/request', callback);
    },
    generateCustomerToken: function (otp, loginToken, callback) {
        var options = {
            method: 'POST',
            body: {
                //scopes: 'gojek:customer:transaction gojek:customer:readonly',
                grant_type: 'otp',
                data:{
                    otp_token: loginToken,
                    otp: otp,
                },
                client_id: config.getClientId(),
                client_secret: config.getClientSecret(),
            }
        };
        console.log(options);
        request._request_goid(options, '/goid/token', callback);
    },
    
    getCustomerInfo: function (callback) {
        var options = {
            method: 'GET',
        };

        request._request(options, '/gojek/v2/customer', callback);
    }
};