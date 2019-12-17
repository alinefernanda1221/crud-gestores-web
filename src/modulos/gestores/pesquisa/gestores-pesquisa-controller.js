import { inherit, find } from "@uirouter/core";

export default class GestoresPesquisaController {

  constructor($state, GestoresService, $rootScope) {
    var vm = this;
    vm.voltar = voltar;
    vm.gestoresPesquisados = [];

    init();

    function init() { 
      if(!!$rootScope.gestoresPesquisados) {
        vm.gestoresPesquisados = angular.copy($rootScope.gestoresPesquisados);
      }
    }

    vm.pesquisarGestor = function() {
      if(!!vm.codigoPesquisaGestor){
        GestoresService.consultaPorId(vm.codigoPesquisaGestor)
        .then((response) => {
          vm.gestoresPesquisados = [];
          $rootScope.gestoresPesquisados = []
          if(!!response.data) {
            vm.gestoresPesquisados.push(response.data);
            $rootScope.gestoresPesquisados.push(response.data);
          }else{
            alert("Gestor não encontrado!")
          }

        }).catch((error) => {
          alert('Gestor não encontrado.');
        });
        
      }else{
        
        GestoresService.buscarTodosGestores()
        .then((response) => {
          vm.gestoresPesquisados = response.data;
          $rootScope.gestoresPesquisados = response.data;
        }).catch((error) => {
          alert("Houve um erro ao pesquisar gestores:" +  error.message);
        });
      }
    }

    vm.editarGestor = function(gestorEditar) {
      $state.go('gestores-edicao', {
    		gestor : gestorEditar 
    	 });
    }

    vm.excluirGestor = function(gestor, index) {
        GestoresService.deletarPorId(gestor.id)
        .then((response) => {
            alert("Cliente ID#" + gestor.id + ' deletado com sucesso!');
            vm.gestoresPesquisados.splice(index, 1);
        }).catch((error) => {
            alert('Houve um erro ao tentar deletar o gestor:');
        })
    }

    function voltar() {
      window.history.back();
    };
  }
}
GestoresPesquisaController.$inject = ['$state', 'GestoresService', '$rootScope'];