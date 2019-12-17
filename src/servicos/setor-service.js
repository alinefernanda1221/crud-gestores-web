import angular from 'angular';

class SetorService {

    constructor($http) {
        this.$http = $http;
        const REST_API = "http://localhost:8080";
        this.ENDPOINT_SETOR = REST_API + "/setor";
    }

    buscarSetores() {
        return this.$http.get(this.ENDPOINT_SETOR + '/buscarTodos');
    }
}

export default angular.module('services.setor-service', [])
    .service('SetorService', SetorService)
    .name;
