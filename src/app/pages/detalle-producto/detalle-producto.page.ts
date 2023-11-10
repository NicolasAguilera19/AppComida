import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CATEGORIAS } from 'src/app/core/constants/categorias';
import { Producto } from 'src/app/core/interfaces/productos';
import { CartService } from 'src/app/core/services/cart.service';

@Component({
  selector: 'app-detalle-producto',
  templateUrl: './detalle-producto.page.html',
  styleUrls: ['./detalle-producto.page.scss'],
})
export class DetalleProductoPage  {

  constructor(
    private activatedRoute: ActivatedRoute,
    public cartService: CartService
    ) {
    activatedRoute.params.subscribe(params => {
      this.buscarProducto(params['nombre']);

    })
   }

   cantidad = 1;
   
   buscarProducto(nombreProductoABuscar:string){
    CATEGORIAS
    for (let i = 0; i < CATEGORIAS.length; i++) {
      const categoriaActual =CATEGORIAS[i];
      for (let j = 0; j < categoriaActual.productos.length; j++) {
        const productoActual = categoriaActual.productos[j];
        if(productoActual.nombre === nombreProductoABuscar){
          this.producto = productoActual;
        }

        

      }
    }
   }
 

  producto: Producto ={
    imagen: 'bhuvbu',
    nombre: 'Nombre producto',
    descripcion: 'holaaaaaaaaaaaa',
    precio: 44444440
  }

}
