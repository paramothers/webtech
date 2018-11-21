import { Injectable } from '@angular/core';
import { CoreModule } from './core.module';

@Injectable({
  providedIn: CoreModule
})
export class LocalStorageService {

  setItem(key: string, item: any) {
    localStorage[key] = JSON.stringify(item);
  }
  getItem<T>(key: string): T {

    if (localStorage[key]) {
      return <T>JSON.parse(localStorage[key]);
    }
    return null;

  }
}
