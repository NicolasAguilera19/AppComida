import { Categoria } from "../interfaces/categoria";


export const CATEGORIAS :Categoria[] = [

    {
      nombre:'Hamburguesas',
      id: 1,
      fotoUrl:"https://okdiario.com/img/2021/05/28/hamburguesa-gourmet-655x368.jpg",
      productos: [{
        nombre: 'SuperPampa',
        precio:  5000,
        descripcion: 'Si quieres tomar un desafío, SUPERPAMPA, es uno.',
        imagen:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRG56OTNZBjFVDzcShFHGuB4hL846pu72VuyA&usqp=CAU'
      },
    {
        nombre: 'Cheese Churu',
        precio: 2700,
        descripcion: 'Para los amantes del queso, una hamburguesa de solo carne y cheddar',
        imagen:'https://www.clarin.com/2021/05/18/2E3Z7hmxJ_720x0__1.jpg'
    },
    {
      nombre: 'Vegetarian Power',
      precio:  1500,
      descripcion: 'Amor puro por la vida sana.',
      imagen:'https://thancguide.org/wp-content/uploads/2022/08/iStock-1310168994-scaled.jpg'
    },
    ]
    },

    {
      nombre:'Pizza',
      id: 2,
      fotoUrl:"https://images.hola.com/imagenes/cocina/recetas/20220208204252/pizza-pepperoni-mozzarella/1-48-890/pepperoni-pizza-abob-t.jpg",
      productos: [
        {
          nombre: 'Pizza Pepe',
          precio: 4000,
          descripcion: 'Bien rústica y hecha a la antigua, como el defensor portugues.',
          imagen:'https://images.hola.com/imagenes/cocina/recetas/20230208226048/pizza-pepperoni/1-201-303/pizza-pepperoni-age-t.jpg?tx=w_680'
        },
      {
          nombre: 'La Picantona',
          precio: 3000,
          descripcion: 'Para los amantes del picante, esta pizza es la indicada.',
          imagen:'https://3.bp.blogspot.com/-tHhgcFprQDo/UeMJtDVf1_I/AAAAAAAAJPA/WqPtfJSPVz4/s1600/IMG_9285.JPG'
      },
      {
        nombre: 'Margaret',
        precio: 3500,
        descripcion: 'Clásica, pero que nunca cansa.',
        imagen:'https://www.hogarmania.com/archivos/202303/pizza-margarita-portada-668x400x80xX-1.jpg'
    }
      ]
    },

    {
      nombre:'Postres',
      id: 3,
      fotoUrl:"https://okdiario.com/img/2021/03/05/recetas-chocolate-655x368.jpg",
      productos: [
        {
          nombre: 'Crumble de manzana',
          precio: 2000,
          descripcion: 'Amor a primera vista.',
          imagen:'https://www.coosur.com//uploads/recetasaceiteoliva/tarta-de-crumble-de-manzana.jpg'
        },
      {
          nombre: 'Queso y Dulce',
          precio: 1000,
          descripcion: 'Inseprables, como vos y tu mejor amigo.',
          imagen:'https://cuk-it.com/wp-content/uploads/2023/08/quesoydulce02-re-e1601390656591-1.jpg'
      },
      {
        nombre: 'Budín de pan',
        precio: 1200,
        descripcion: 'El que nunca falla.',
        imagen:'https://www.ilolay.com.ar/uploads/recetas/1633203723-Budin-de-pan.jpg'
    }
      
      ]
    },

    {
      nombre:'Bebidas',
      id: 4,
      fotoUrl:"https://www.revistaneo.com/sites/default/files/2023-01/bebidasNAok.png",
      productos: [
        {
          nombre: 'Coca Cola',
          precio: 600,
          descripcion: 'Coca Cola común, zero o light.',
          imagen:'https://imagenes.elpais.com/resizer/u_pWfBVJulsCRxuMmTRfWBDULHw=/1960x1103/cloudfront-eu-central-1.images.arcpublishing.com/prisa/FGVRU4ALGVUKRIOJEPLT4TCPZA.jpg'
        },
      {
          nombre: 'Fanta',
          precio: 600,
          descripcion: 'Fanta Naranja, pomelo o uva.',
          imagen:'https://www.reasonwhy.es/media/cache/destacada/fanta-nueva-identidad-visual.jpg'
      },
      {
        nombre: 'Cerveza Duff',
        precio: 800,
        descripcion: 'Inspirada de "Los Simpsons", te traemos una cervza única.',
        imagen:'https://http2.mlstatic.com/D_NQ_NP_970471-MLA42268043587_062020-O.webp'
      }
      ]
    },


  ]