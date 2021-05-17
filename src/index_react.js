import React from 'react';
import ReactDOM from 'react-dom';
import cssStyle from './style.css';
import logo from './assets/logo.jpg';
import data from './data.json'
import {Helloworld} from './componentes/helloWorld.jsx'

ReactDOM.render(
    <Helloworld name="React" logo={logo} menu={data.links}/>,
    document.getElementById("app")
)

