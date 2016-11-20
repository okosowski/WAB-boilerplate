import angular from "angular";
import "angular-ui-router";
import {DashboardComponent} from "./dashboard.component";
import dashboardRoutesConfig from "./dashboard.routing";

export default angular
  .module('app.dashboard', ['ui.router'])
  .config(dashboardRoutesConfig)
  .run(() => {
    console.info('RUN dashboard.module.js');
  })
  .component('dashboard', DashboardComponent)
  .name;
