import { Component } from '@angular/core';
import data from '../../list.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'meadlist';
  dataValue = data
}
