'use strict';

/**ANGULAR/ OUTRAS LIBS */
import angular from 'angular'
import uirouter, { pattern } from 'angular-ui-router';
import diretivas from './diretivas/diretivas.js';
import jquery from 'jquery';
import parsley from 'parsleyjs';
let blockUI = require('angular-block-ui');
let uiMask = require('angular-ui-mask');
let uiBootstrap = require('angular-ui-bootstrap');
// let ngStorage = require('ngstorage-webpack');


/**ESTILOS E FRAMEWORKS VISUAIS */
import 'bootstrap';
import './scss/app.scss';
import '@fortawesome/fontawesome-free/js/fontawesome';
import '@fortawesome/fontawesome-free/js/solid';
import '@fortawesome/fontawesome-free/js/regular';
import '@fortawesome/fontawesome-free/js/brands';

/**APP GERAL */
import rotas from './app.config';

/**HOME */
import home from './modulos/home/home.js';

/**GESTORES CADASTRO */
import gestoresCadastro from './modulos/gestores/cadastro/gestores-cadastro.js';
import gestoresPesquisa from './modulos/gestores/pesquisa/gestores-pesquisa.js';
import gestoresEdicao from './modulos/gestores/edicao/gestores-edicao.js';

angular
.module('myApp', [
  uiBootstrap,
  diretivas,
  uirouter,
  uiMask,
  blockUI,
  home,
  gestoresCadastro,
  gestoresPesquisa,
  gestoresEdicao
])
.config(rotas);