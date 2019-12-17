import { inherit } from "@uirouter/core";

export default class GestoresCadastroController {

  constructor($scope, SetorService, GestoresService) {
    var vm = this;
    vm.voltar = voltar;
    vm.setores = [];
    vm.gestor = {};
    vm.mensagemCampoObrigatorio = 'Este campo é obrigatório.'

    init();

    function init() {
      SetorService.buscarSetores()
        .then((response) => {
          vm.setores = response.data;
      }).catch((error) => {
        alert('Houve um erro ao buscar setores!')
      });
    }
    
    vm.cadastrarGestor = () => {
      if(vm.formCadGestor.$valid && !setorNaoEstaPreenchido()){
        GestoresService.cadastrarGestor(vm.gestor)
        .then((response) => {
          alert('Cadastrado com sucesso!')
          limpar();
        }).catch((error) => {
          alert('Houve um erro ao cadastrar gestor')
        });
      }

      if(setorNaoEstaPreenchido()) {
        alert('O setor deve ser preenchido!');
      }
    }

    function setorNaoEstaPreenchido() {
      return typeof vm.gestor.setor === 'undefined';
    }

    function limpar(){
      vm.formCadGestor.$setUntouched();
      document.getElementById("cadastro-gestor").reset();
      vm.gestor.setor = {};
      window.location.reload();
    }

    function voltar() {
      window.history.back();
    };
  }
}
GestoresCadastroController.$inject = ['$scope', 'SetorService', 'GestoresService'];