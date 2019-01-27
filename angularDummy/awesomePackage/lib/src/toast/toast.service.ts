import { Injectable, Inject } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  constructor(
    @Inject('config')
    private config: any
    ) { }
}
