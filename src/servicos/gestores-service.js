import angular from 'angular';

class GestoresService {

    constructor($http) {
        this.$http = $http;
        const REST_API = "http://localhost:8080";
        this.ENDPOINT_GESTORES = REST_API + "/gestor";
    }

    cadastrarGestor(gestor) {
        return this.$http.post(this.ENDPOINT_GESTORES + '/salvar', gestor);
    }

    buscarTodosGestores() {
        return this.$http.get(this.ENDPOINT_GESTORES + '/buscarTodos');
    }

    consultaPorId(id) {
        return this.$http.get(this.ENDPOINT_GESTORES + '/buscar/' + id);
    }

    deletarPorId(id) {
        return this.$http.delete(this.ENDPOINT_GESTORES + '/excluir/' + id);
    }

    atualizarGestor(gestor) {
        return this.$http.put(this.ENDPOINT_GESTORES + '/atualizar', gestor)
    }
}

export default angular.module('services.gestor-service', [])
    .service('GestoresService', GestoresService)
    .name;
