import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'home-about',
  templateUrl: './home.html',
  standalone: true,
  imports: [CommonModule],
})

export class HomeComponent implements OnInit {
  constructor(private titleService: Title) { }

  ngOnInit(): void {
    this.titleService.setTitle('Home Page | FaarizSheikh');
  }
}
