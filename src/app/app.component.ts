import { Component } from '@angular/core';
import data from '../assets/jsons/data.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  data = data;
}
