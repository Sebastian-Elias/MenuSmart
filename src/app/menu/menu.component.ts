import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { IonMenu, IonHeader, IonToolbar, IonTitle, IonList, IonItem, IonContent } from '@ionic/angular/standalone';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  standalone: true, 
  imports: [CommonModule, RouterModule, IonMenu, IonHeader, IonToolbar, IonTitle, IonList, IonItem, IonContent],
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
