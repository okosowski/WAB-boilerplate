import angular from "angular";
import "angular-ui-router";
import './style/app.scss';

import {AppComponent} from './app.component';
import routesConfig from './app.routes';
import appRun from './app.run';

import dashboard from "./components/dashboard/dashboard.module";
import test from "./components/testView/testView.module"

const dependencies = [
  'ui.router',
  dashboard,
  test
];

export default angular
  .module('app', dependencies)
  .config(routesConfig)
  .run(appRun)
  .component('app', AppComponent)
  .name;
