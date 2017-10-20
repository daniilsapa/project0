"use strict";

module.exports = main => {

    main.component('mainTest', {
        templateUrl: '../../templates/main-page.template.html',
        controller: ['$scope', 'SteamFactory', function (scope, SteamFactory) {

            scope.a = 7;

            scope.action = () => {
                console.log('action');
                SteamFactory.action()
                    .then(result => console.log(result))
                    .catch(error => console.log(error))

            };

            scope.authenticate = () => {

                SteamFactory.authenticate()
                    .then(result => console.log(result))
                    .catch(error => console.log(error))

            };

            scope.verify = () => {

                SteamFactory.verify()
                    .then(result => console.log(result))
                    .catch(error => console.log(error))

            };

            scope.logout = () => {

                SteamFactory.logout()
                    .then(result => console.log(result))
                    .catch(error => console.log(error))

            }


        }]
    })

};