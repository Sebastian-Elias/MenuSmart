import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuService, Menu } from 'src/app/services/menu.service';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonItem, IonInput, IonButton, IonLabel  } from '@ionic/angular/standalone';

@Component({
  selector: 'app-agregar-menus',
  templateUrl: './agregar-menus.page.html',
  styleUrls: ['./agregar-menus.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, FormsModule, IonItem, IonInput, IonButton, IonLabel]
})
export class AgregarMenusPage implements OnInit {

  nuevoMenu: Menu = {
    nombre: '',
    descripcion: '',
    ingredientes: '',
    precio: 0,
    imagen: ''
  };

  constructor(private menuService: MenuService, private router: Router) { }

  ngOnInit() {}

  // Método para guardar el nuevo menú
  guardarMenu() {
    // Agrega el nuevo menú a la lista en el servicio
    this.menuService.agregarMenu(this.nuevoMenu);

    // Navega a la lista de menús después de guardar
    this.router.navigate(['/listar-menus']);
  }
}

