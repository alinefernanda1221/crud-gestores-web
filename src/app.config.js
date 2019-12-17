routing.$inject = ['$stateProvider', '$urlRouterProvider'];

export default function routing($stateProvider, $urlRouterProvider) {
  /**HOME */
  let homeState = {
    name: 'home',
    url: '/home',
    templateUrl: './modulos/home/home.view.html',
    controller: 'HomeController',
    controllerAs: 'homeCtrl',
    params: { usuario: null }
  }
  $stateProvider.state(homeState);
  
  /**GESTORES CADASTRO*/
  let gestoresCadastro = {
    name: 'gestores-cadastro',
    url: '/gestores/cadastro',
    templateUrl: './modulos/gestores/cadastro/gestores-cadastro-view.html',
    controller: 'GestoresCadastroController',
    controllerAs: 'gestorCadCtrl'
  }
  $stateProvider.state(gestoresCadastro);

    /**CLIENTE PESQUISA*/
  let gestoresPesquisa = {
    name: 'gestores-pesquisa',
    url: '/gestores/pesquisa',
    templateUrl: './modulos/gestores/pesquisa/gestores-pesquisa-view.html',
    controller: 'GestoresPesquisaController',
    controllerAs: 'gestoresPesquisaCtrl'
  }
  $stateProvider.state(gestoresPesquisa);

    /**CLIENTE EDICAO*/
  let gestoresEdicao = {
    name: 'gestores-edicao',
    url: '/gestores/edicao',
    templateUrl: './modulos/gestores/edicao/gestores-edicao-view.html',
    controller: 'GestoresEdicaoController',
    controllerAs: 'gestoresEdicaoCtrl',
    params: { gestor: null }
  }
  $stateProvider.state(gestoresEdicao);


  $urlRouterProvider.otherwise('/home')

}