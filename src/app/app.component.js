import {TestClass} from './testClass/testClass'

class AppController {
  constructor() {
    this.testClass = TestClass;
    // console.log('testClass', this.testClass);
    // console.log(this.testClass.getTestText());
  }
}


export const AppComponent = {
  template: require('./app.html'),
  controller: AppController
};
