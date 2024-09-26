import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
messageSource = new Subject<string>();
message = this.messageSource.asObservable();
  constructor() { 

  }

  sendMessage(data:string) {
    this.messageSource.next(data);
  }
}
