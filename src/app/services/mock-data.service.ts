import { Injectable } from '@angular/core';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class MockDataService {

  constructor() { }

  getMockedData(): Product[] {

    const mockData: Product[] = [
      {
        id: 1,
        name: 'Camiseta river',
        price: 100,
        description: 'Esta es la descripcion de una camiseta normal',
        color: ['blanco', 'negro'],
        category: 'Camiseta',
        stock: 10,
        imageUrl: 'https://assets.adidas.com/images/w_600,f_auto,q_auto/0e38a5d13dd7485b84dfad630117e6a8_9366/Camiseta_River_Plate_85_Blanco_HC0296_01_laydown.jpg',
        brand: 'Adidas'
      },
      {
        id: 2,
        name: 'Camiseta Argentina',
        price: 100,
        description: 'Esta es la descripcion de una camiseta normal de Argentina',
        color: ['blanco', 'negro', 'azul'],
        category: 'Camiseta',
        stock: 9,
        imageUrl: 'https://celadasa.vtexassets.com/arquivos/ids/266792-800-auto?v=638460356860200000&width=800&height=auto&aspect=true',
        brand: 'Adidas'
      },
      {
        id: 3,
        name: 'Pelota Brazuca',
        price: 900,
        description: 'Esta es la descripcion de una pelota del munidal Brazil 2014',
        color: ['blanco'],
        category: 'Pelota',
        stock: 19,
        imageUrl: 'https://http2.mlstatic.com/D_NQ_NP_734394-MLA27593054609_062018-O.webp',
        brand: 'Adidas'
      },
      {
        id: 4,
        name: 'Buzo river',
        price: 100,
        description: 'Esta es la descripcion de un buzo de river',
        color: ['blanco', 'rojo'],
        category: 'Buzo',
        stock: 0,
        imageUrl: 'https://sporting.vtexassets.com/arquivos/ids/1449361/6IS5553-000-1.jpg?v=638623707427970000',
        brand: 'Adidas'
      },
      {
        id: 5,
        name: 'Adidas botines',
        price: 10,
        description: 'Esta es la descripcion de unos botines',
        color: ['blanco', 'negro'],
        category: 'Calzado',
        stock: 21,
        imageUrl: 'https://media2.solodeportes.com.ar/media/catalog/product/cache/3cb7d75bc2a65211451e92c5381048e9/b/o/botines-de-futbol-adidas-x-crazyfast-3-tf-azul-100010id9338001-1.jpg',
        brand: 'Adidas'
      },
      {
        id: 6,
        name: 'Puma Botines',
        price: 100,
        description: 'Esta es la descripcion de unos botines',
        color: ['blanco', 'negro'],
        category: 'Calzado',
        stock: 0,
        imageUrl: 'https://s3.sa-east-1.amazonaws.com/www.vaypol.com.ar/variants/vs5m52ouqvawcsjdqawq4q9xjpi9/77e513bcd3762f47919c96f85e400038a39acdbb0d268f51c1fd98fe5327bd96',
        brand: 'Puma'
      },
      {
        id: 7,
        name: 'Nike Jordan',
        price: 100,
        description: 'Esta es la descripcion de unos botines de basquet',
        color: ['blanco', 'negro'],
        category: 'Calzado',
        stock: 10,
        imageUrl: 'https://essential.vtexassets.com/arquivos/ids/1514011-800-auto?v=638591466763200000&width=800&height=auto&aspect=true',
        brand: 'Nike'
      }
    ]

    return mockData;
  }
}
