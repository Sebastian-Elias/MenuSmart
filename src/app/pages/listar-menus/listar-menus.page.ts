import { Component, OnInit } from '@angular/core';
import { MenuService, Menu } from 'src/app/services/menu.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonItem, IonInput, IonButton, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonList, IonThumbnail, IonLabel} from '@ionic/angular/standalone';

@Component({
  selector: 'app-listar-menus',
  templateUrl: './listar-menus.page.html',
  styleUrls: ['./listar-menus.page.scss'],
  standalone: true,
  imports: [CommonModule, IonContent, IonHeader, IonTitle, IonToolbar, FormsModule, IonItem, IonInput, IonButton, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonList, IonThumbnail, IonLabel]
})
export class ListarMenusPage implements OnInit {
  menus: Menu[] = [];

  constructor(private menuService: MenuService) {}

  ngOnInit() {
    // Suscríbete a la lista de menús para recibir actualizaciones
    this.menuService.menus$.subscribe((menus) => {
      this.menus = menus;
      console.log('Menús actualizados:', this.menus);
    });
  }

  eliminarMenu(index: number) {
    this.menus.splice(index, 1); // Modifica la lista local
  }
}

