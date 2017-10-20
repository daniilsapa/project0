"use strict";

module.exports = angular => {

    const main = angular.module('mainPage', [
        'core'
    ]);

    require('../components/main.component')(main);

};