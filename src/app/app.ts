import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrls: ['./app.scss']
})
export class App {
  protected readonly title = signal('my-site');
  name : string = 'Faariz';
  age : number = 20;
  isGraduated : boolean = false;
}
