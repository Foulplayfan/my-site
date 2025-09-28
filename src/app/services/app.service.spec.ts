import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

interface HeaderConfig {
  title: string;
  theme: 'light' | 'dark';
}

@Injectable({ providedIn: 'root' })
export class AppService {
  private headerSource = new BehaviorSubject<HeaderConfig>({ title: '', theme: 'light' });
  header$ = this.headerSource.asObservable();

  setHeader(config: HeaderConfig) {
    this.headerSource.next(config);
  }
}
