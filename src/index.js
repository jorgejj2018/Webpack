import cssStyle from './style.css';
import logo from './assets/logo.jpg';
import data from './data.json'
import {Helloworld} from './componentes/helloWorld.js'


const d = document,
hello = new Helloworld('Vanilla Js') ,
$main = d.getElementById('app'),
$logo = d.createElement("img"),
$link = d.createElement("a"),
$h2 = d.createElement("h2"),
$nav = d.createElement("nav");
$nav.classList.add("menu");
$logo.src = logo;
$logo.alt = "logo";
let menu = "";
data.links.forEach(el => menu += `<a href="${el[1]}">${el[0]}</a>`);

$h2.textContent = hello.greet()
$nav.innerHTML = menu
$main.appendChild($nav);
$main.appendChild($logo);
$main.appendChild($h2);

// const arr = [1,2,3],
// nextES = () => {
//     let spt = [...arr]
//     console.log(spt)
// }
// nextES()

// console.log("hola archivo sin configuracion")