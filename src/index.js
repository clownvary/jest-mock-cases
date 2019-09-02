import _ from 'lodash';
import printMe from './print';
import './style.less';
import Icon from './icon.jpg';


function component() {

  var element = document.createElement('div'); 
  var btn = document.createElement('button');

  element.innerHTML = _.join(['Hello', 'webpack'], ' ');

  btn.innerHTML = 'Click me and check the console!';
  element.appendChild(btn);

  btn.onclick = e=> import('./print').then(module=>{
    var printme = module.default;
    printme();
  })

  return element;
}

document.body.appendChild(component());

// if (module.hot) {
//   module.hot.accept('./print.js', function () {
//     console.log('Accepting the updated printMe module!');
//     printMe();
//   })
// }