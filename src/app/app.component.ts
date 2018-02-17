import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  labels: string[] = ['Column1', 'Column2', 'Column3'];
  data: number[] = [12, 142, 163];

  constructor() { }
}
