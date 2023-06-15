import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { City } from './city.model';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnChanges {

  ngOnChanges(changes: SimpleChanges): void {
    throw new Error('Method not implemented.');
  }

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  cities: City[];
  selectedCity: City;
  name = 'Angular';
  isCollapsed = true;
  title = 'gestionGarage';
  carBtn: boolean = false;
  motoBtn: boolean = false;
  isMoto : boolean = false;
  isCar : boolean = false;

  constructor() {
    this.cities = [
      { name: 'New York', code: 'NY' },
      { name: 'Rome', code: 'RM' },
      { name: 'London', code: 'LDN' },
      { name: 'Istanbul', code: 'IST' },
      { name: 'Paris', code: 'PRS' },
    ];
    
    this.cities = [
      { name: 'New York', code: 'NY' },
      { name: 'Rome', code: 'RM' },
      { name: 'London', code: 'LDN' },
      { name: 'Istanbul', code: 'IST' },
      { name: 'Paris', code: 'PRS' },
    ];
  }

  carClicked() {
    if (this.carBtn != false) {
      this.motoBtn = false;
      this.isCar = true;
    }
  }
  motoClicked() {
    if (this.motoBtn != false) {
      this.carBtn = false;
      this.isMoto = true;
    }
  }
}
