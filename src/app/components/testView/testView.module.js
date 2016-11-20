import angular from "angular";
import "angular-ui-router";

import testRoutConfig from './testView.routing';
import {TestComponent} from './testView.component'
import {ViewOneComponent} from './viewOne/viewOne.component'
import {ViewTwoComponent} from './viewTwo/viewTwo.component'


export default angular
  .module('app.test', ['ui.router'])
  .config(testRoutConfig)
  .component('mrTest', TestComponent)
  .component('mrViewOne', ViewOneComponent)
  .component('mrViewTwo', ViewTwoComponent)
  .name;
