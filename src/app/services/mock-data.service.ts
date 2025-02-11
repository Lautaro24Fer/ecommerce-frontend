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
        color: ['white', 'black'],
        category: 'Camiseta',
        stock: 10,
        imageUrl: 'https://celadasa.vtexassets.com/arquivos/ids/360396-800-auto?v=638720230589830000&width=800&height=auto&aspect=true',
        brand: 'Adidas',
        offer: 0.9
      },
      {
        id: 2,
        name: 'Camiseta Argentina',
        price: 100,
        description: 'Esta es la descripcion de una camiseta normal de Argentina',
        color: ['white', 'black', 'blue'],
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
        color: ['white'],
        category: 'Pelota',
        stock: 19,
        imageUrl: 'https://http2.mlstatic.com/D_NQ_NP_734394-MLA27593054609_062018-O.webp',
        brand: 'Adidas',
        offer: 0.15
      },
      {
        id: 4,
        name: 'Buzo river',
        price: 100,
        description: 'Esta es la descripcion de un buzo de river',
        color: ['white', 'red'],
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
        color: ['white', 'black'],
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
        color: ['white', 'black'],
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
        color: ['white', 'black'],
        category: 'Calzado',
        stock: 10,
        imageUrl: 'https://essential.vtexassets.com/arquivos/ids/1514011-800-auto?v=638591466763200000&width=800&height=auto&aspect=true',
        brand: 'Nike'
      },
      {
        id: 8,
        name: 'Camiseta river',
        price: 100,
        description: 'Esta es la descripcion de una camiseta normal',
        color: ['white', 'black'],
        category: 'Camiseta',
        stock: 10,
        imageUrl: 'https://celadasa.vtexassets.com/arquivos/ids/360396-800-auto?v=638720230589830000&width=800&height=auto&aspect=true',
        brand: 'Adidas'
      },
      {
        id: 9,
        name: 'Camiseta river',
        price: 100,
        description: 'Esta es la descripcion de una camiseta normal',
        color: ['white', 'black'],
        category: 'Camiseta',
        stock: 10,
        imageUrl: 'https://celadasa.vtexassets.com/arquivos/ids/360396-800-auto?v=638720230589830000&width=800&height=auto&aspect=true',
        brand: 'Adidas'
      },
      {
        id: 10,
        name: 'Pelota Brazuca',
        price: 900,
        description: 'Esta es la descripcion de una pelota del munidal Brazil 2014',
        color: ['white'],
        category: 'Pelota',
        stock: 0,
        imageUrl: 'https://http2.mlstatic.com/D_NQ_NP_734394-MLA27593054609_062018-O.webp',
        brand: 'Adidas',
        offer: 0.1
      },
      {
        id: 11,
        name: 'Buzo river',
        price: 100,
        description: 'Esta es la descripcion de un buzo de river',
        color: ['white', 'red'],
        category: 'Buzo',
        stock: 0,
        imageUrl: 'https://sporting.vtexassets.com/arquivos/ids/1449361/6IS5553-000-1.jpg?v=638623707427970000',
        brand: 'Adidas'
      },
      {
        id: 12,
        name: 'Adidas botines',
        price: 10,
        description: 'Esta es la descripcion de unos botines',
        color: ['white', 'black'],
        category: 'Calzado',
        stock: 21,
        imageUrl: 'https://media2.solodeportes.com.ar/media/catalog/product/cache/3cb7d75bc2a65211451e92c5381048e9/b/o/botines-de-futbol-adidas-x-crazyfast-3-tf-azul-100010id9338001-1.jpg',
        brand: 'Adidas',
        offer: 0.21
      },
      {
        id: 13,
        name: 'Puma Botines',
        price: 100,
        description: 'Esta es la descripcion de unos botines',
        color: ['white', 'black'],
        category: 'Calzado',
        stock: 0,
        imageUrl: 'https://s3.sa-east-1.amazonaws.com/www.vaypol.com.ar/variants/vs5m52ouqvawcsjdqawq4q9xjpi9/77e513bcd3762f47919c96f85e400038a39acdbb0d268f51c1fd98fe5327bd96',
        brand: 'Puma',
        offer: 0.5
      },
      {
        id: 14,
        name: 'Nike Jordan',
        price: 100,
        description: 'Esta es la descripcion de unos botines de basquet',
        color: ['white', 'black'],
        category: 'Calzado',
        stock: 10,
        imageUrl: 'https://essential.vtexassets.com/arquivos/ids/1514011-800-auto?v=638591466763200000&width=800&height=auto&aspect=true',
        brand: 'Nike'
      },
      {
        id: 15,
        name: 'Camiseta Atletico Madrid',
        price: 912,
        imageUrl: 'https://http2.mlstatic.com/D_NQ_NP_831709-MLA42172360550_062020-O.webp',
        description: 'Camiseta de la temporada 2018-2019',
        color: ['red', 'white'],
        category: 'Camiseta',
        stock: 22,
        brand: 'Nike'
      },
      {
        id: 16,
        name: 'Short Atletico Madrid',
        price: 800,
        imageUrl: 'https://static.futbolfactory.es/products/194928_1.jpg',
        description: 'Short de la temporada 2018-2019',
        color: ['blue', 'red'],
        category: 'Pantalon',
        stock: 11,
        brand: 'Nike'
      },
      {
        id: 17,
        name: 'Botines Future 2.1 Netfit',
        price: 200,
        imageUrl: 'https://acdn.mitiendanube.com/stores/002/042/897/products/rrrrrrrrr1-563f7c4540917cf58f16693316716290-1024-1024.jpeg',
        description: 'Botines',
        color: ['green', 'black', 'white'],
        category: 'Botines',
        stock: 0,
        brand: 'Puma',
        offer: 0.4
      }
    ]

    return mockData;
  }
}
