import angular from 'angular';
import uirouter from 'angular-ui-router';

import GestoresCadastroController from './gestores-cadastro-controller';
import SetorService from '../../../servicos/setor-service';
import GestoresService from '../../../servicos/gestores-service';

export default angular.module('myApp.gestores.cadastro', [uirouter, SetorService, GestoresService])
    .controller('GestoresCadastroController', GestoresCadastroController)
    .name;

