var API_URL = 'https://api.gojekapi.com';
const {v4:uuidv4} = require('uuid');
var token = '';
var userProfile = {};
var uniqueId = '';
var pin = '';
var location = 'id_ID';
var session = '';
var appId = 'com.go-jek.ios';
var phoneModel = 'Apple, iPhone11,6';
var phoneMake = 'Apple';
var osDevice = 'iOS, 13.3.1';
var xPlatform = 'iOS';
var appVersion = '3.51';
const clientId = 'gojek:consumer:app';
var clientSecret = 'pGwQ7oi8bKqqwvid09UrjqpkMEHklb';
var userAgent = 'Gojek/3.51 (com.go-jek.ios; build:6890866; iOS 13.3.1) Alamofire/3.51';

module.exports = {
    
    setUserProfile: function (userProfile) {
        this.userProfile = userProfile;
    },
    getUserProfile: function () {
        return this.userProfile;
    },

    setToken: function (token) {
        this.token = token;
    },
    getToken: function () {
        return this.token;
    },
    setPin: function (pin) {
        this.pin = pin;
    },
    getPin: function () {
        return this.pin;
    },
    getDeviceOs: function () {
        return phoneMake;
    },
    getPlatform:function(){
        return xPlatform;
    },
    getPhoneModel: function () {
        return phoneModel;
    },
    getAppId: function () {
        return appId;
    },

    setUniqueId: function (uniqueId) {
        this.uniqueId = uniqueId;
    },
    setSessionId: function (session) {
        this.session = session;
    },
    getUniqueId: function () {
        if(!uniqueId || uniqueId.length) {
            this.setUniqueId(uuidv4().toUpperCase());
        }
        return this.uniqueId || uniqueId;
    },
    getSessionId: function () {
        if(!session || session.length) {
            this.setSessionId(uuidv4().toUpperCase());
        }
        return this.session || session;
    },
    setAppVersion: function (appVersion) {
        this.appVersion = appVersion;
    },
    getClientId:function(){
        return clientId;
    },
    getAppVersion: function () {
        return this.appVersion || appVersion;
    },
    getClientSecret: function () {
        return this.clientSecret || clientSecret;
    },
    getUserAgent:function(){
        return userAgent;
    },
    setLocation: function (location) {
        this.location = location;
    },
    getLocation: function () {
        return this.location || location;
    },
};