import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Mes tâches';
  tabs : any = [{label: "Poids", link: "/poids"}, {label: "Distance", link: "/distance"}]
}
