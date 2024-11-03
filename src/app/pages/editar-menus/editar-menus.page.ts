import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-editar-menus',
  templateUrl: './editar-menus.page.html',
  styleUrls: ['./editar-menus.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class EditarMenusPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
