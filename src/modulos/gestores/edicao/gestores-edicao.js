import angular from 'angular';
import uirouter from 'angular-ui-router';

import GestoresEdicaoController from './gestores-edicao-controller';
import SetorService from '../../../servicos/setor-service';
import GestoresService from '../../../servicos/gestores-service';

export default angular.module('myApp.gestores.edicao', [uirouter, SetorService, GestoresService])
    .controller('GestoresEdicaoController', GestoresEdicaoController)
    .name;

