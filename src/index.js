import 'mathquill/build/mathquill.css'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

import 'mathquill/build/mathquill.js'
import React from 'react';
import ReactDOM from 'react-dom';
import { ButtonGroup, Button } from 'react-bootstrap';

ReactDOM.render(
  <div>
    <p>Type math here: <span id="math-field"></span>
    </p>
    <ButtonGroup>
      <Button onClick={()=>input("\\sqrt")}>√</Button>
      <Button onClick={()=>input("\\sin")}>sin</Button>
      <Button onClick={()=>input("\\cos")}>cos</Button>
      <Button onClick={()=>input("\\tan")}>tan</Button>
    </ButtonGroup>
  </div>,
  document.getElementById('root')
);

var mathFieldSpan = document.getElementById('math-field');
var MQ = window.MathQuill.getInterface(2);
var mathField = MQ.MathField(mathFieldSpan, {
  spaceBehavesLikeTab: true,
  handlers: {
    edit: function() {
      mathField.focus()
    }
  }
});

function input(str) {
  mathField.cmd(str)
  mathField.focus()
}
