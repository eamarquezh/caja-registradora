import './style.css';
import { PDFDocument, StandardFonts, rgb } from 'pdf-lib';
const viteLogo = './boxes.svg';

const lienzo = document.getElementById('app');

function br(){return document.createElement('br');}
function i(){return document.createElement('i');}
function h1(){return document.createElement('h1');}
function h2(){return document.createElement('h2');}
function div(){return document.createElement('div');}
function input(){return document.createElement('input');}
function button(){return document.createElement('button');}
function img(){return document.createElement('img');}
function label(){return document.createElement('label');}
function table(){return document.createElement('table');}
function tr(){return document.createElement('tr');}
function th(){return document.createElement('th');}
function tbody(){return document.createElement('tbody');}
function td(){return document.createElement('td');}
function form(){return document.createElement('form');}


function alertF(msg,color){
  const divAl =document.createElement('div');
  divAl.textContent=msg;
  divAl.className='alerta';
  divAl.style.color=color;
  divAl.style.backgroundColor='#f9f9f9';
  lienzo.appendChild(divAl);
  lienzo.appendChild(br());
  setTimeout(()=>{
    lienzo.removeChild(divAl);
  }, 3000);
}

const ses=label();
const closeB=button();
closeB.innerHTML='<i class="bi bi-x-square"></i>';
ses.className='boton-fijo';


//Login
const logo=img();
logo.className="logo";
logo.src=`${viteLogo}`; 
const tituloLogin=h1();
tituloLogin.textContent="Inicio de Sesion";

const contLogin=div();
const formulario=form();
const usuario=input();
usuario.placeholder="Ingresa usuario";
const contrasenia=input();
contrasenia.placeholder="Ingresa contraseña";
contrasenia.type='password';
contrasenia.autocomplete='section-red shipping pass current-password';
const ingresar=button();
ingresar.textContent='Ingresar';

formulario.addEventListener('submit', function(event) {
  event.preventDefault();

  // Aquí puedes realizar acciones adicionales antes de enviar el formulario o ejecutar otras funciones
});

//show login
contLogin.appendChild(logo);
contLogin.appendChild(tituloLogin);
contLogin.appendChild(formulario);
formulario.appendChild(usuario);
formulario.appendChild(br());
formulario.appendChild(contrasenia);
formulario.appendChild(br());
formulario.appendChild(ingresar);

function loginF(){
  lienzo.appendChild(contLogin);
}
function loginC(){
  lienzo.removeChild(contLogin);
}

//
const t_tabla_inventario=h2();
t_tabla_inventario.textContent="Tabla Inventario";
const contAdmin2=div();
contAdmin2.className='d-scroll';
const tabla_inventario=table();
const row_titulo=tr();
const campo_id=th();
campo_id.textContent='id';
const campo_producto=th();
campo_producto.textContent='producto';
const campo_compra=th();
campo_compra.textContent='compra';
const campo_venta=th();
campo_venta.textContent='venta';
const campo_fecha=th();
campo_fecha.textContent='fecha';
const campo_cantidad=th();
campo_cantidad.textContent='cantidad';
const campo_modificar=th();
campo_modificar.textContent='acción';
const conte_tabla = tbody();

//admin1
const t_registro_inventario=h2();
t_registro_inventario.textContent="Registro inventario";
const contAdmin1=div();
const id_producto=input();
id_producto.placeholder='codigo';
const producto_a=input();
producto_a.placeholder='Producto';
const compra_a=input();
compra_a.placeholder='Precio compra';
compra_a.type='number';
const venta_a=input();
venta_a.placeholder='Precio venta';
venta_a.type='number';
const lfecha = label();
lfecha.textContent='Fecha';
lfecha.for='fecha_a';
const fecha_a=input();
fecha_a.type='date';
const cantidad_a=input();
cantidad_a.type='number';
cantidad_a.placeholder="Cantidad"
const guardar=button();
guardar.textContent='guardar';
const borrar=button();
borrar.textContent='borrar';

contAdmin1.appendChild(t_registro_inventario);
contAdmin1.appendChild(id_producto);
contAdmin1.appendChild(br());
contAdmin1.appendChild(producto_a);
contAdmin1.appendChild(br());
contAdmin1.appendChild(compra_a);
contAdmin1.appendChild(br());
contAdmin1.appendChild(venta_a);
contAdmin1.appendChild(br());
contAdmin1.appendChild(lfecha);
contAdmin1.appendChild(fecha_a);
contAdmin1.appendChild(br());
contAdmin1.appendChild(cantidad_a);
contAdmin1.appendChild(br());
contAdmin1.appendChild(guardar);
contAdmin1.appendChild(borrar);

//admin2
contAdmin2.appendChild(t_tabla_inventario);
contAdmin2.appendChild(br());
tabla_inventario.appendChild(row_titulo);
tabla_inventario.appendChild(conte_tabla);
row_titulo.appendChild(campo_id);
row_titulo.appendChild(campo_producto);
row_titulo.appendChild(campo_compra);
row_titulo.appendChild(campo_venta);
row_titulo.appendChild(campo_fecha);
row_titulo.appendChild(campo_cantidad);
row_titulo.appendChild(campo_modificar);
//admin3
const resumen_venta=h2();
resumen_venta.textContent="Resumen ventas";
const contAdmin3=div();
const contRes=div();
const descargarV =button();
descargarV.textContent='Descarga ventas';

contAdmin3.appendChild(resumen_venta);
contAdmin3.appendChild(contRes);
contAdmin3.appendChild(descargarV);

//admin4
const t_empleados=h2();
t_empleados.textContent="Empleados";
const contAdmin4=div();
const lisEmpleados=h2();

contAdmin4.appendChild(t_empleados);
contAdmin4.appendChild(lisEmpleados);


function administradorF(){
//call a contenedores
lienzo.appendChild(contAdmin1);
lienzo.appendChild(contAdmin2);
contAdmin2.appendChild(tabla_inventario);
lienzo.appendChild(contAdmin3);
lienzo.appendChild(contAdmin4);
}

function administradorC(){
//call a contenedores
lienzo.removeChild(contAdmin1);
lienzo.removeChild(contAdmin2);
lienzo.removeChild(contAdmin3);
lienzo.removeChild(contAdmin4);
}




const contVendedor1=div();
const vender_empleado=h2();
vender_empleado.textContent="Vender";
const busqueda=input();
busqueda.placeholder="Busqueda"
const n_productos=input();
n_productos.placeholder="producto"
n_productos.readOnly=true
const n_cantidad=input();
n_cantidad.placeholder="Cantidad"
n_cantidad.type="number";
const n_precio=input();
n_precio.placeholder="Precio"
n_precio.type="number";
n_precio.readOnly=true
const btn_buscar=button();
btn_buscar.textContent="Buscar";
const btn_agregar=button();
btn_agregar.textContent="Agregar";
const btn_quitar=button();
btn_quitar.textContent="Quitar";
const tiket=div();
const btn_vender=button();
btn_vender.textContent="Vender e imprimir";



contVendedor1.appendChild(vender_empleado);
contVendedor1.appendChild(busqueda);
contVendedor1.appendChild(br());
contVendedor1.appendChild(n_productos);
contVendedor1.appendChild(br());
contVendedor1.appendChild(n_cantidad);
contVendedor1.appendChild(br());
contVendedor1.appendChild(n_precio);
contVendedor1.appendChild(br());
contVendedor1.appendChild(btn_buscar);
contVendedor1.appendChild(br());
contVendedor1.appendChild(btn_agregar);
contVendedor1.appendChild(btn_quitar);
contVendedor1.appendChild(br());
contVendedor1.appendChild(tiket);
contVendedor1.appendChild(br());
contVendedor1.appendChild(btn_vender);



const inventario_empleado=h2();
inventario_empleado.textContent="Tabla Inventario";
const contVendedor2=div();


contVendedor2.appendChild(inventario_empleado);
contVendedor2.className='d-scroll';


closeB.addEventListener('click',()=>location.href='./');

function vendedorF(){
  lienzo.appendChild(contVendedor1);
  contVendedor2.appendChild(tabla_inventario);
  lienzo.appendChild(contVendedor2);
  
}
function vendedorC(){
  lienzo.removeChild(contVendedor1);
  lienzo.removeChild(contVendedor2);
}

ingresar.addEventListener('click',()=>{
  ingresarFunction();
});

guardar.addEventListener('click',()=>{
  let a = id_producto.value.length;
  let b = producto_a.value.length;
  let c = compra_a.value.length;
  let d = venta_a.value.length;
  let e = fecha_a.value.length;
  let f = cantidad_a.value.length;
if(a>0 & b>0 & c>0 & d>0 & e>0 & f>0){
  insertarInventario();
  id_producto.value='';
  producto_a.value='';
  compra_a.value='';
  venta_a.value='';
  fecha_a.value='';
  cantidad_a.value='';
}else{
  alertF('Llenar todos los campos','red');
}
  
});


async function ingresarFunction(){
  let formData_ingresar = new FormData();           
  formData_ingresar.append("usuario", usuario.value);
  formData_ingresar.append("contrasenia", contrasenia.value);
  await fetch('ingresar.php', {
      method: "POST", 
      body: formData_ingresar
  })
  .then(response=>response.json())
  .then(data=>{
      if(data[0].perfil=='Administrador'){
        ses.textContent+='Administrador';
        lienzo.appendChild(ses);
        ses.appendChild(closeB);
        verInventario();
        verResumen();
        verUsuario();
        administradorF();
        loginC();
        alertF('Administrador','#000');
      }else if(data[0].perfil=='Vendedor'){
        ses.textContent='Vendedor';
        lienzo.appendChild(ses);
        ses.appendChild(closeB);
        verInventarioE();
        vendedorF();
        loginC();
        alertF('Vendedor','#000');
      }else{
        alertF('usuario o contraseña incorrectos','red');
      }
  });
}


async function modificarInventario(id_modificacion){
  let formData_inventario = new FormData();           
  formData_inventario.append('id_modificacion', id_modificacion);
  await fetch('modificar.php',{
    method: "POST", 
    body: formData_inventario
  })
  .then(response=>response.json())
  .then(data=>{
      //console.log(data);
      id_producto.value='';
      producto_a.value='';
      compra_a.value='';
      venta_a.value='';
      fecha_a.value='';
      cantidad_a.value='';
      data.forEach(element => {

        id_producto.value=element.id_producto;
        producto_a.value=element.producto_a;
        compra_a.value=element.compra_a;
        venta_a.value=element.venta_a;
        fecha_a.value=element.fecha_a;
        cantidad_a.value=element.cantidad_a;
        
      });
  });
}

async function modificarInventarioE(id_modificacion){
  let formData_inventario = new FormData();           
  formData_inventario.append('id_modificacion', id_modificacion);
  await fetch('modificar.php',{
    method: "POST", 
    body: formData_inventario
  })
  .then(response=>response.json())
  .then(data=>{
      //console.log(data);
      busqueda.value='';
      n_productos.value='';
      n_cantidad.value='';
      data.forEach(element => {

        busqueda.value=element.id_producto;
        n_productos.value=element.producto_a;
        n_cantidad.max=element.cantidad_a;
        n_precio.value=element.venta_a;
        
      });
  });
}



let arr=[];
async function insertarInventario(){
  conte_tabla.innerHTML='';
  let formData_inventario = new FormData();           
  formData_inventario.append('id_producto', id_producto.value);
  formData_inventario.append('producto_a', producto_a.value);
  formData_inventario.append('compra_a', compra_a.value);
  formData_inventario.append('venta_a', venta_a.value);
  formData_inventario.append('fecha_a', fecha_a.value);
  formData_inventario.append('cantidad_a', cantidad_a.value);
  await fetch('guardarInventario.php', {
      method: "POST", 
      body: formData_inventario
  })
  .then(response=>response.json())
  .then(data=>{
    let cadena='';
      arr=[];
      data.forEach(element => {
        arr.push(element.id_producto);
        cadena+='<tr>';
        cadena+='<td>'+element.id_producto+'</td>';
        cadena+='<td>'+element.producto_a+'</td>';
        cadena+='<td>'+element.compra_a+'</td>';
        cadena+='<td>'+element.venta_a+'</td>';
        cadena+='<td>'+element.fecha_a+'</td>';
        cadena+='<td>'+element.cantidad_a+'</td>';
        cadena+='<td><button class="myButton">modificar</button></td>';
        cadena+='</tr>';
      });
      conte_tabla.innerHTML=cadena;
      lista();
  });
}

borrar.addEventListener('click',borrarInventario);
async function borrarInventario(){
  conte_tabla.innerHTML='';
  let formData_inventario = new FormData();           
  formData_inventario.append('id_producto', id_producto.value);
  await fetch('eliminarinventario.php', {
      method: "POST", 
      body: formData_inventario
  })
  .then(response=>response.json())
  .then(data=>{
    let cadena='';
      arr=[];
      data.forEach(element => {
        arr.push(element.id_producto);
        cadena+='<tr>';
        cadena+='<td>'+element.id_producto+'</td>';
        cadena+='<td>'+element.producto_a+'</td>';
        cadena+='<td>'+element.compra_a+'</td>';
        cadena+='<td>'+element.venta_a+'</td>';
        cadena+='<td>'+element.fecha_a+'</td>';
        cadena+='<td>'+element.cantidad_a+'</td>';
        cadena+='<td><button class="myButton">modificar</button></td>';
        cadena+='</tr>';
      });
      conte_tabla.innerHTML=cadena;
      lista();
  });
}







async function verInventario(){
  await fetch('inventario.php')
  .then(response=>response.json())
  .then(data=>{
      //console.log(data);
      let cadena='';
      arr=[];
      data.forEach(element => {
        arr.push(element.id_producto);
        cadena+='<tr>';
        cadena+='<td>'+element.id_producto+'</td>';
        cadena+='<td>'+element.producto_a+'</td>';
        cadena+='<td>'+element.compra_a+'</td>';
        cadena+='<td>'+element.venta_a+'</td>';
        cadena+='<td>'+element.fecha_a+'</td>';
        cadena+='<td>'+element.cantidad_a+'</td>';
        cadena+='<td><button class="myButton">modificar</button></td>';
        cadena+='</tr>';
      });
      conte_tabla.innerHTML=cadena;
      lista();
  });
}


async function verResumen(){
  await fetch('verresumen.php')
  .then(response=>response.json())
  .then(data=>{
      let cadena='';
      cadena+='<table>';
      cadena+='<tr><th>top 10 productos</th><th>total</th></tr>';    
      data.forEach(element => {
        cadena+='<tr>';
        cadena+='<td>'+element.producto+'</td>';
        cadena+='<td>'+element.total+'</td>';
        cadena+='</tr>';
      });
      cadena+='</table>';
      contRes.innerHTML=cadena;
  });
}




async function searchInventario(){
  conte_tabla.innerHTML='';
  let formData_inventario = new FormData();           
  formData_inventario.append('id_producto', busqueda.value);
  await fetch('buscarinventario.php', {
      method: "POST", 
      body: formData_inventario
  })
  .then(response=>response.json())
  .then(data=>{
    let cadena='';
      arr=[];
      data.forEach(element => {
        arr.push(element.id_producto);
        cadena+='<tr>';
        cadena+='<td>'+element.id_producto+'</td>';
        cadena+='<td>'+element.producto_a+'</td>';
        cadena+='<td>'+element.compra_a+'</td>';
        cadena+='<td>'+element.venta_a+'</td>';
        cadena+='<td>'+element.fecha_a+'</td>';
        cadena+='<td>'+element.cantidad_a+'</td>';
        cadena+='<td><button class="myButton2">Elegir</button></td>';
        cadena+='</tr>';
      });
      conte_tabla.innerHTML=cadena;
      lista2();
  });
}

async function verInventarioE(){
  await fetch('inventario.php')
  .then(response=>response.json())
  .then(data=>{
      //console.log(data);
      let cadena='';
      arr=[];
      data.forEach(element => {
        arr.push(element.id_producto);
        cadena+='<tr>';
        cadena+='<td>'+element.id_producto+'</td>';
        cadena+='<td>'+element.producto_a+'</td>';
        cadena+='<td>'+element.compra_a+'</td>';
        cadena+='<td>'+element.venta_a+'</td>';
        cadena+='<td>'+element.fecha_a+'</td>';
        cadena+='<td>'+element.cantidad_a+'</td>';
        cadena+='<td><button class="myButton2">Elegir</button></td>';
        cadena+='</tr>';
      });
      conte_tabla.innerHTML=cadena;
      lista2();
  });
}


function lista(){
 const myButtons = document.querySelectorAll('.myButton');
  myButtons.forEach((button,i) => {
    button.onclick = () => modificarInventario(arr[i]);
  });
}

function lista2(){
  const myButtons2 = document.querySelectorAll('.myButton2');
   myButtons2.forEach((button,i) => {
     button.onclick = () => modificarInventarioE(arr[i]);
   });
 
 }
  




async function verUsuario(){
  await fetch('verusuarios.php')
  .then(response=>response.json())
  .then(data=>{
      //console.log(data);

      data.forEach(element => {
        lisEmpleados.innerHTML+='<div>'+element.usuario+'</div>';
      });
  });
}



let lista_de_productos = [];

function dibujarObjeto(){
  let cadena='';
  cadena+='<table>'
  cadena+='<tr><th>producto</th><th>cantidad</th><th>total</th></tr>';
  lista_de_productos.forEach((elemento)=>{
    cadena+='<tr>';
    cadena+='<td>'+elemento.producto+'</td>';
    cadena+='<td>'+elemento.cantidad+'</td>';
    cadena+='<td>'+elemento.total+'</td>';
    cadena+='</tr>';
  });
  cadena+='</table>';
  tiket.innerHTML=cadena;
}

function addListaProductos(){
  let productoBuscado = n_productos.value;
  let e = lista_de_productos.filter((producto)=> producto.producto===productoBuscado).length;
  let a = n_productos.value.length;
  let b = n_cantidad.value.length;
  let c = n_precio.value.length;
  let d = n_cantidad.getAttribute('max');
  let f = parseInt(n_cantidad.value);
  console.log('maximo'+d);
  console.log('valor'+f);
  console.log(f<=d);
if(a>0 & b>0 & c>0 & f<=d & e<=0){
  lista_de_productos.push(
    {
      producto: n_productos.value,
      cantidad: n_cantidad.value,
      total:(n_cantidad.value*n_precio.value),
    });
  busqueda.value='';
  n_productos.value='';
  n_cantidad.value='';
  n_precio.value='';
  alertF('producto agregado','black');
}else{
  alertF('Llenar correctamente los campos','red');
}
dibujarObjeto();
}

function quitListaProductos(){
  lista_de_productos.pop();
  alertF('Registro eliminado','black');
  dibujarObjeto();
}

btn_agregar.addEventListener('click',addListaProductos);
btn_quitar.addEventListener('click',quitListaProductos);
btn_buscar.addEventListener('click',searchInventario);


btn_vender.addEventListener('click',guardarVenta);
async function descargarPDF(pdfBytes) {
  const blob = new Blob([pdfBytes], { type: 'application/pdf' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'archivo.pdf';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}
async function crearPDF() {
  const pdfDoc = await PDFDocument.create();
  const page = pdfDoc.addPage();
  const { width, height } = page.getSize();
  const fontSize = 20;
  let contador=height;
  contador=contador-fontSize;
  let suma=0;
  page.drawText('--------GRACIAS POR USAR REGISTER BOX-----------------',
  { x: 0, y: contador, size: fontSize});
  contador=contador-fontSize;

  page.drawText('producto........cantidad........total',
    { x: 0, y: contador, size: fontSize});
    contador=contador-fontSize;
  lista_de_productos.forEach((elemento)=>{
    page.drawText(elemento.producto+'........'+elemento.cantidad+'........$'+elemento.total,
    { x: 0, y: contador, size: fontSize});
    contador=contador-fontSize;
    suma=suma+elemento.total;
  });

  page.drawText('--------Total a pagar    '+ suma +'-----------------',
  { x: 0, y: contador, size: fontSize});
  contador=contador-fontSize;
  const pdfBytes = await pdfDoc.save();
  descargarPDF(pdfBytes);
}


async function guardarVenta(){
  tiket.innerHTML='';
  conte_tabla.innerHTML='';
  //const jsonData = JSON.stringify(lista_de_productos);           
  await fetch('guardarventa.php', {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      }, 
      body: JSON.stringify(lista_de_productos),
  })
  .then(response=>response.json())
  .then(data=>{
    let cadena='';
      arr=[];
      data.forEach(element => {
        arr.push(element.id_producto);
        cadena+='<tr>';
        cadena+='<td>'+element.id_producto+'</td>';
        cadena+='<td>'+element.producto_a+'</td>';
        cadena+='<td>'+element.compra_a+'</td>';
        cadena+='<td>'+element.venta_a+'</td>';
        cadena+='<td>'+element.fecha_a+'</td>';
        cadena+='<td>'+element.cantidad_a+'</td>';
        cadena+='<td><button class="myButton2">Elegir</button></td>';
        cadena+='</tr>';
      });
      conte_tabla.innerHTML=cadena;
      lista2();
  });
  crearPDF();
}


descargarV.addEventListener("click", function() {

  fetch('descargaventas.php')
  .then(response => response.json())
  .then(miArray => {
      let link = document.createElement('a');
      link.download = 'ventas.csv';
      let blob = new Blob(miArray, {type: 'text/plain'});
      link.href = URL.createObjectURL(blob);
      link.click();

      URL.revokeObjectURL(link.href);
      console.log(miArray); // Aquí se muestra el array recibido desde PHP
  });
});


loginF();
