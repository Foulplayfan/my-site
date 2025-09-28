import { Component, Renderer2, AfterViewInit } from '@angular/core';
import { HeaderComponent } from './components/header/header';
import { FooterComponent } from './components/footer/footer';
import { RouterModule } from '@angular/router';
import { AppService } from './services/app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrls: ['./app.scss'],
  standalone: true,
  imports: [HeaderComponent, FooterComponent, RouterModule]
})
export class AppComponent {
  constructor(private appService: AppService, private renderer: Renderer2) { }
}
