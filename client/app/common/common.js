import angular from 'angular';
import InputText from './inputText/inputText';

let commonModule = angular.module('app.common', [
  InputText
])
  
.name;

export default commonModule;
