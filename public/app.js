const angular = require('angular');
const ngResource = require('./bower_components/angular-resource/angular-resource.min');
const ngRoute = require('./bower_components/angular-route/angular-route.min');
const FileUpload = require('./bower_components/angular-file-upload/dist/angular-file-upload');


const project0 = angular.module('project0', [
    'ngResource',
    'ngRoute',
    'mainPage',
    'core'
]);

//SETTING CONFIG
require('./app.config')(project0, angular);

//INJECTING MODULES
require('./javascripts/modules')(angular);