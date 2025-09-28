import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-work',
  templateUrl: './work.html',
  standalone: true,
  imports: [CommonModule],
})

export class WorkComponent {
  constructor(private titleService: Title) { }

  ngOnInit(): void {
    this.titleService.setTitle('Work Page | FaarizSheikh');
  }
}
