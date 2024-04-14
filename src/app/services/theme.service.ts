import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ThemeService {
  private colorTheme : BehaviorSubject<string> = new BehaviorSubject<string>('default');
  $theme = this.colorTheme.asObservable;

  setTheme(theme : string){
    this.colorTheme.next(theme);
  }

  getTheme(){
    return this.colorTheme.getValue();
  }
}
