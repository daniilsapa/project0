"use strict";

module.exports = angular => {

    const core = angular.module('core', []);

    require('../factories/steam.factory')(core);

};