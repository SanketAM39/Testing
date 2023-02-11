import { Injectable } from '@angular/core';
import { SharedService } from './shared.service';

@Injectable({
  providedIn: 'root',
})
export class CalcService {
  constructor(private shared: SharedService) {}
  multiply(a: number, b: number) {
    this.shared.sharedFunction();
    return a * b;
  }
}
