var request = require('./request');

module.exports = {
    getGoPayDetail: function (callback) {
        var options = {
            method: 'GET',
        };

        request._request(options, '/wallet/profile', callback);
    },
    // page start from 1
    getGoPayHistory: function (page, limit, callback) {
        var options = {
            method: 'GET',
            qs: {
                page: page,
                limit: limit
            }
        };

        request._request(options, '/wallet/history', callback);
    },
};
