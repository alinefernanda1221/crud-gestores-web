import { inherit } from "@uirouter/core";

export default class HomeController {

  constructor($state, $timeout, $scope, $rootScope) {
    var vm = this;

    init();

    function init() { }

    /**O FORMULÁRIO SÓ APARECE AS MENSAGENS DE ERRO SE RECARREGAR A PÁGINA */
    vm.irParaCadastro = function () {
      $timeout(function () {
        $state.go('gestores-cadastro');
        $timeout(function () {
          window.location.reload();
        },100);
      },100);
    }
    
  }
}
HomeController.$inject = ['$state', '$timeout', '$scope', '$rootScope'];