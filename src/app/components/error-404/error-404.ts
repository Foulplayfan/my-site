import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-error-404',
  imports: [],
  templateUrl: './error-404.html',
  styleUrl: './error-404.scss'
})
export class Error404Component {
  constructor(private titleService: Title, private router: Router) { }

  goHome() {
    this.router.navigate(['/']);  // absolute navigation
  }

  ngOnInit(): void {
    this.titleService.setTitle('ERROR 404 - Page Not Found');
  }
}
