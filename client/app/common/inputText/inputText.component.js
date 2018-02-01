import template from './inputText.html';
import controller from './inputText.controller';
import './inputText.scss';

let inputTextComponent = {
  bindings: {
    value: '='
  },
  template,
  controller
};

export default inputTextComponent;
