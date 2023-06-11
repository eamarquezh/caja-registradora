import './style.css'
import viteLogo from '/boxes.svg'

const lienzo = document.getElementById('app');

function br(){return document.createElement('br');}
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

alertF('bienvenido','#000');

//Login
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
//lienzo.appendChild(contLogin);

//show login
contLogin.appendChild(logo);
contLogin.appendChild(tituloLogin);
contLogin.appendChild(usuario);
contLogin.appendChild(br());
contLogin.appendChild(contrasenia);
contLogin.appendChild(br());
contLogin.appendChild(ingresar);




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

//lienzo.appendChild(contAdmin1);

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


// inventario admin2 y vendedor2
const t_tabla_inventario=h2();
t_tabla_inventario.textContent="Tabla Inventario";
const contAdmin2=div();
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


//lienzo.appendChild(contAdmin2);
contAdmin2.appendChild(t_tabla_inventario);
contAdmin2.appendChild(br());
contAdmin2.appendChild(tabla_inventario);
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

//lienzo.appendChild(contAdmin3);
contAdmin3.appendChild(resumen_venta);

//admin4
const t_empleados=h2();
t_empleados.textContent="Empleados";
const contAdmin4=div();

//lienzo.appendChild(contAdmin4);
//contAdmin4.appendChild(t_empleados);


//vendedor


const contVendedor1=div();
const vender_empleado=h2();
vender_empleado.textContent="Vender";
const busqueda=input();
busqueda.placeholder="Busqueda"
const n_productos=input();
n_productos.placeholder="Cantidad"
n_productos.type="number";
const btn_buscar=button();
btn_buscar.textContent="Buscar";
const btn_agregar=button();
btn_agregar.textContent="Agregar";
const btn_quitar=button();
btn_quitar.textContent="Quitar";
const tiket=div();
const btn_vender=button();
btn_vender.textContent="Vender e imprimir";

lienzo.appendChild(contVendedor1);
contVendedor1.appendChild(vender_empleado);
contVendedor1.appendChild(busqueda);
contVendedor1.appendChild(br());
contVendedor1.appendChild(n_productos);
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



lienzo.appendChild(contVendedor2);
contVendedor2.appendChild(inventario_empleado);
contVendedor2.appendChild(tabla_inventario);



