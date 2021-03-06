var extend = require('xtend');
var request = require('request');
var config = require('./config');

var API_URL = 'https://api.gojekapi.com';
var API_URL_GOID = 'https://goid.gojekapi.com';
module.exports = {
    _request_goid: function (options, url, callback) {
        var getURL =API_URL_GOID+ url;
        var opt = {
            url: getURL,
            headers: {
                'x-appid': config.getAppId(),
                'x-phonemodel':config.getPhoneModel(),
                'user-agent':config.getUserAgent(),
                'x-session-id':"B2903CAB-634F-464F-A72E-BBDA522B641D",
                'x-phonemake':'Apple',
                'x-uniqueid': "A9C4CD65-C8A5-43B2-B6D1-BE2EA9E6717D",
                'x-deviceos':config.getDeviceOs(),
                'x-platform':config.getPlatform(),
                'x-appversion': config.getAppVersion(),
                'accept': '*/*',
                'content-type': 'application/json',
                'x-user-type':'customer',
               // authorization: 'Bearer ' + config.getToken(),
            },
            json: true
        };
        if(config.getToken()){
            opt.headers.Authorization = 'Bearer '+config.token;
        }
        if(config.getPin()){
            opt.headers.pin = config.pin;
        }
        //return;
        opt.headers = extend(opt.headers, options.headers)
        options = extend(options, opt);
        console.log(options);
        request(options, callback);
    },
    _request: function (options, url, callback) {
        var getURL = API_URL + url;
        var opt = {
            url: getURL,
            headers: {
                'x-appid': config.getAppId(),
                'x-phonemodel':config.getPhoneModel(),
                'user-agent':config.getUserAgent(),
                'x-session-id':"B2903CAB-634F-464F-A72E-BBDA522B641D",
                'x-phonemake':'Apple',
                'x-uniqueid': "A9C4CD65-C8A5-43B2-B6D1-BE2EA9E6717D",
                'x-deviceos':config.getDeviceOs(),
                'x-platform':config.getPlatform(),
                'x-appversion': config.getAppVersion(),
                'accept': '*/*',
                'content-type': 'application/json',
                'x-user-type':'customer',
               // authorization: 'Bearer ' + config.getToken(),
            },
            json: true
        };
        if(config.getToken()){
            opt.headers.Authorization = 'Bearer '+config.token;
        }
        if(config.getPin()){
            opt.headers.pin = config.pin;
        }

        opt.headers = extend(opt.headers, options.headers)
        options = extend(options, opt);
        console.log(options);
        request(options, callback);
    }
};