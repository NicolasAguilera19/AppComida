import { Injectable } from '@angular/core';
import { Productocarrito } from '../interfaces/carrito';
import { Producto } from '../interfaces/productos';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  carrito: Productocarrito [] = []
  totalcarrito: number = 0
  
  constructor(){
    const guardado = localStorage.getItem ("carrito")
    if (guardado) {
      this.carrito = JSON.parse (guardado);
    }
    this.calculartotal ()
  }
  
  agregarAlCarrito(producto:Producto,cantidad:number){
    //Reviso si el producto existe en el carrito
    const index = this.carrito.findIndex(item => item.producto.nombre === producto.nombre);
    if(index === -1){
      //Si es un producto nuevo creo el elemento producto y lo pongo en el carrito
      const productoActual:Productocarrito = {
        cantidad: cantidad,
        producto: producto
      }
      this.carrito.push(productoActual);
    } else {
      //Si el producto ya existe, modifico el carrito para agregarle las unidades correspondientes
      this.carrito[index].cantidad = this.carrito[index].cantidad + cantidad;
    }
    
    console.log(this.carrito)
    this.guardarLocalstorage()
    this.calculartotal()
  }
  
  eliminarProducto(nombre:string){
  this.carrito = this.carrito.filter (item => item.producto.nombre != nombre)
  this .guardarLocalstorage ()
  this.calculartotal()
  }
  
  vaciarcarrito(){
  this.carrito = [];
  this.guardarLocalstorage()
  this.calculartotal()
  }
  
  cambiarCantidad(){
  this.guardarLocalstorage()
  this.calculartotal()
  }
  
  guardarLocalstorage (){
   localStorage.setItem("carrito",JSON.stringify(this.carrito))
  }
  
  calculartotal(){
  let subtotal = 0
  this.carrito.forEach (item => {
  subtotal = subtotal + item.cantidad * item.producto.precio
  })
  this.totalcarrito = subtotal;
}
}
