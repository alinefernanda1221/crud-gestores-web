import { inherit } from "@uirouter/core";

export default class GestoresEdicaoController {

  constructor($stateParams, GestoresService, SetorService) {
    var vm = this;
    vm.voltar = voltar;
    vm.gestor = $stateParams.gestor;
    vm.mensagemCampoObrigatorio = 'Este campo é obrigatório.'

    init();

    function init() {
        SetorService.buscarSetores()
        .then((response) => {
            vm.setores = response.data;
        }).catch((error) => {
            alert('Houve um erro ao buscar setores!')
        });

        vm.gestor.dataNascimento = new Date(vm.gestor.dataNascimento); 
        vm.setor = angular.copy(vm.gestor.setor);
    }

    vm.atualizarCliente = function(){
      if(vm.formAtualizaGestor.$valid && !setorNaoEstaPreenchido()){
        GestoresService.atualizarGestor(vm.gestor)
          .then((response) => {
            alert('Gestor ID #' + vm.gestor.id + ' atualizado com sucesso!');
        }).catch((error) => {
          alert('Houve um erro ao tentar atualizar o gestor: ' + error.message);
        });
      }

      if(setorNaoEstaPreenchido()) {
        alert('O setor deve ser preenchido!');
      }
    }

    function setorNaoEstaPreenchido() {
      return typeof vm.gestor.setor === 'undefined';
    }

    function voltar() {
      window.history.back();
    };
  }
}//Fim classe
GestoresEdicaoController.$inject = ['$stateParams', 'GestoresService', 'SetorService'];