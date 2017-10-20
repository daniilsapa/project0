"use strict";

module.exports = core => {

    core.factory('SteamFactory', [ '$resource',
        function (resource) {

            class SteamFactory {

                constructor (resource) {

                    this.tooledResource = resource('/steam', {}, {
                        action: {
                            method: 'GET'
                        },
                        authenticate: {
                            method: 'GET',
                            url: '/steam/authenticate'
                        },
                        verify: {
                            method: 'GET',
                            url: '/steam/verify'
                        },
                        logout: {
                            method: 'GET',
                            url: '/steam/logout'
                        }
                    })

                }

                action () {

                    return new Promise ((resolve, reject) => {

                        this.tooledResource
                            .action(resolve, reject);

                    })

                }

                authenticate () {

                    return new Promise ((resolve, reject) => {

                        this.tooledResource
                            .authenticate(resolve, reject);

                    })

                }

                verify () {

                    return new Promise ((resolve, reject) => {

                        this.tooledResource
                            .verify(resolve, reject);

                    })

                }

                logout () {

                    return new Promise ((resolve, reject) => {

                        this.tooledResource
                            .logout(resolve, reject);

                    })

                }

            }

            return new SteamFactory(resource)

        }
    ])

};