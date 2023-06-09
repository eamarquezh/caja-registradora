import './style.css'
import viteLogo from '/boxes.svg'

const lienzo = document.getElementById('app');
function alertF(msg,color){
  const divAl =document.createElement('div');
  divAl.textContent=msg;
  divAl.className='alerta';
  divAl.style.color=color;
  divAl.style.backgroundColor='#f9f9f9';
  lienzo.appendChild(divAl);
  setTimeout(()=>{
    lienzo.removeChild(divAl);
  }, 3000);
}
function br(){return document.createElement('br');}
function h1(){return document.createElement('h1');}
function div(){return document.createElement('div');}
function input(){return document.createElement('input');}
function button(){return document.createElement('button');}
function img(){return document.createElement('img');}

//Login
let br1=br();
let br2=br();
const logo=img();
logo.className="logo";
logo.src=`${viteLogo}`; 
const tituloLogin=h1();
tituloLogin.textContent="Inicio de Sesion";

const contLogin=div();

const usuario=input();
usuario.placeholder="Ingresa usuario"
const contrasenia=input();
contrasenia.placeholder="Ingresa contraseña"
contrasenia.type='password';
const ingresar=button();
ingresar.textContent='Ingresar';

//start
lienzo.appendChild(contLogin);

//show login
contLogin.appendChild(logo);
contLogin.appendChild(tituloLogin);
contLogin.appendChild(usuario);
contLogin.appendChild(br1);
contLogin.appendChild(contrasenia);
contLogin.appendChild(br2);
contLogin.appendChild(ingresar);

//accion
ingresar.addEventListener('click',()=>{
  ingresarF();
});

function ingresarF(){
  alertF('este es el estatus','red'); 
}