import React,{Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from './card.js';
// import results from './api.randomuser.me.js';
import './css/style.css';


class App extends Component {   
 render(){
  return(
    <div>
      <Card />
    </div>
  )
 }
}

export default App;