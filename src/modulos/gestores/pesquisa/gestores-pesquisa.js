import angular from 'angular';
import uirouter from 'angular-ui-router';

import GestoresPesquisaController from './gestores-pesquisa-controller';
import GestoresService from '../../../servicos/gestores-service';

export default angular.module('myApp.gestores.pesquisa', [uirouter, GestoresService])
  .controller('GestoresPesquisaController', GestoresPesquisaController)
  .name;

  