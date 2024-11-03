import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-detalles-menus',
  templateUrl: './detalles-menus.page.html',
  styleUrls: ['./detalles-menus.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class DetallesMenusPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
