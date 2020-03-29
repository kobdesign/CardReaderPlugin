/*global cordova, module*/

module.exports = {
    greet: function (name, successCallback, errorCallback) {
        cordova.exec(successCallback, errorCallback, "SmartCardReaderPlugin", "greet", [name]);
    },
    connect: function (name, successCallback, errorCallback) {
        cordova.exec(successCallback, errorCallback, "SmartCardReaderPlugin", "connect", [name]);
    },
    read: function (name, successCallback, errorCallback) {
        cordova.exec(successCallback, errorCallback, "SmartCardReaderPlugin", "read", [name]);
	}
};