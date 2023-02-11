import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  constructor() {
    console.log('Constructor call');
  }

  sharedFunction() {
    console.log('shared function calling');
  }
}
