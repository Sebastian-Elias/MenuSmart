import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface Menu {
  nombre: string;
  descripcion: string;
  ingredientes: string;
  precio: number;
  imagen: string;
}

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  private menusSubject = new BehaviorSubject<Menu[]>([]);
  menus$ = this.menusSubject.asObservable();

  constructor() {
    // Inicializa algunos menús
    this.menusSubject.next([
      {
        nombre: 'Pizza Napolitana',
        descripcion: 'Deliciosa pizza clásica con salsa de tomate, mozzarella y albahaca fresca.',
        ingredientes: 'Salsa de tomate, queso mozzarella, albahaca fresca, aceite de oliva',
        precio: 9500,
        imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTe5oX62Jd4kjpTOiWxUVV0zNTApvQxaTMuEg&s'
      },
      {
        nombre: 'Ensalada César',
        descripcion: 'Ensalada fresca con lechuga romana, crutones, y queso parmesano.',
        ingredientes: 'Lechuga romana, pepinillo, huevo, queso cheddar, aderezo César',
        precio: 6500,
        imagen:'https://www.recetasnestle.cl/sites/default/files/srh_recipes/3a5e42e262ec4394def6f80a9cc038b4.jpg'
      },
      {
        nombre: 'Hamburguesa Clásica',
        descripcion: 'Hamburguesa de carne de res con queso, lechuga, tomate y cebolla.',
        ingredientes: 'Pan de hamburguesa, carne de res, queso cheddar, lechuga, tomate, cebolla',
        precio: 8500,
        imagen:'https://images.mrcook.app/recipe-image/01910a3b-3576-7539-9eec-57359af41c17'
      },
      {
        nombre: 'Pasta Carbonara',
        descripcion: 'Pasta italiana con salsa de huevo, queso, panceta y pimienta negra.',
        ingredientes: 'Pasta, huevo, queso parmesano, panceta, pimienta negra',
        precio: 10500,
        imagen:'https://www.gourmet.cl/wp-content/uploads/2016/12/Carbonara-editada.jpg'
      },
      {
        nombre: 'Tacos al Pastor',
        descripcion: 'Tacos de carne de cerdo marinada con piña y salsa verde.',
        ingredientes: 'Tortilla de maíz, carne de cerdo, piña, salsa verde, cebolla, cilantro',
        precio: 7000,
        imagen:'https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/C07AE049-11C3-4672-A96A-A547C15F0116/Derivates/FE1D05A4-0A44-4007-9A42-5CAFD9F8F798.jpg'
      }
    ]);
  }

  // Método para agregar un nuevo menú
  agregarMenu(nuevoMenu: Menu) {
    const currentMenus = this.menusSubject.getValue();
    this.menusSubject.next([nuevoMenu, ...currentMenus]);
  }

  // Método para eliminar un menú
  eliminarMenu(index: number) {
    const currentMenus = this.menusSubject.getValue();
    currentMenus.splice(index, 1);
    this.menusSubject.next([...currentMenus]);
  }
}