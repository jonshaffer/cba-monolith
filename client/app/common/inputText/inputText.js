import angular from 'angular';
import inputTextComponent from './inputText.component';

let inputTextModule = angular.module('inputText', [])

.component('inputText', inputTextComponent)
  
.name;

export default inputTextModule;
