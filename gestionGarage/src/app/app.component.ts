import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';

import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Car } from './models/cars.model';
import { CarBrandsList } from './models/carsbrand.model';
import { CarService } from './services/carBrandsService.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnChanges {
  cities: Car[];
  motosList: Car[];
  carsList: Car[];
  carsBrands : CarBrandsList[];
  selectedcarListModel: Car;
  name = 'Angular';
  isCollapsed = true;
  title = 'gestionGarage';
  cm: string;
  isMoto: boolean = false;
  isCar: boolean = false;
  displayAddCar: boolean = false;
  form: FormGroup;

  constructor(private carBrandService : CarService) {
    
    this.motosList  = [
      { "id":1,"annee": "2011", "immatriculation": "140 Tunis 6590", "couleur": "#000000", "marque": "HARLEY DAVIDSON", "type": "Moto" , "description" : "MOTO HARLEY DAVIDSON 140 , #000000 ,Tunis 6590 , 140 Tunis 6590"},
      { "id":2,"annee": "2011", "immatriculation": "140 Tunis 6590", "couleur": "#000000", "marque": "HONDA", "type": "Moto","description" : "HONDA 140 , #000000 ,Tunis 6590 , 140 Tunis 6590" },
      { "id":3,"annee": "2011", "immatriculation": "140 Tunis 6590", "couleur": "#000000", "marque": "Audi", "type": "Moto" ,"description" : "BMW 140 , #000000 ,Tunis 6590 , 140 Tunis 6590"},
      { "id":4,"annee": "2011", "immatriculation": "140 Tunis 6590", "couleur": "#000000", "marque": "Toyota", "type": "Moto" ,"description" : "BMW 140 , #000000 ,Tunis 6590 , 140 Tunis 6590"},
      { "id":5,"annee": "2011", "immatriculation": "140 Tunis 6590", "couleur": "#000000", "marque": "KTM", "type": "Moto" ,"description" : "BMW 140 , #000000 ,Tunis 6590 , 140 Tunis 6590"},
      { "id":6,"annee": "2011", "immatriculation": "140 Tunis 6590", "couleur": "#000000", "marque": "Ford", "type": "Moto" ,"description" : "BMW 140 , #000000 ,Tunis 6590 , 140 Tunis 6590"},
      { "id":7,"annee": "2011", "immatriculation": "140 Tunis 6590", "couleur": "#000000", "marque": "KTM", "type": "Moto" ,"description" : "BMW 140 , #000000 ,Tunis 6590 , 140 Tunis 6590"},
      { "id":8,"annee": "2011", "immatriculation": "140 Tunis 6590", "couleur": "#000000", "marque": "Nissan", "type": "Moto" ,"description" : "BMW 140 , #000000 ,Tunis 6590 , 140 Tunis 6590"},
      { "id":9,"annee": "2011", "immatriculation": "140 Tunis 6590", "couleur": "#000000", "marque": "Volkswagen", "type": "Moto" ,"description" : "BMW 140 , #000000 ,Tunis 6590 , 140 Tunis 6590"},
      { "id":10,"annee": "2011", "immatriculation": "140 Tunis 6590", "couleur": "#000000", "marque": "TVS", "type": "Moto" ,"description" : "BMW 140 , #000000 ,Tunis 6590 , 140 Tunis 6590"}
    ]

    this.carsList = [
      { "id":1,"annee": "2011", "immatriculation": "140 Tunis 6590", "couleur": "#000000", "marque": "BMW", "type": "Voiture" , "description" : "BMW 140 , #000000 ,Tunis 6590 , 140 Tunis 6590"},
      { "id":2,"annee": "2011", "immatriculation": "140 Tunis 6590", "couleur": "#000000", "marque": "Mercedes-Benz", "type": "Voiture","description" : "BMW 140 , #000000 ,Tunis 6590 , 140 Tunis 6590" },
      { "id":3,"annee": "2011", "immatriculation": "140 Tunis 6590", "couleur": "#000000", "marque": "Audi", "type": "Voiture" ,"description" : "BMW 140 , #000000 ,Tunis 6590 , 140 Tunis 6590"},
      { "id":4,"annee": "2011", "immatriculation": "140 Tunis 6590", "couleur": "#000000", "marque": "Toyota", "type": "Voiture" ,"description" : "BMW 140 , #000000 ,Tunis 6590 , 140 Tunis 6590"},
      { "id":5,"annee": "2011", "immatriculation": "140 Tunis 6590", "couleur": "#000000", "marque": "Honda", "type": "Voiture" ,"description" : "BMW 140 , #000000 ,Tunis 6590 , 140 Tunis 6590"},
      { "id":6,"annee": "2011", "immatriculation": "140 Tunis 6590", "couleur": "#000000", "marque": "Ford", "type": "Voiture" ,"description" : "BMW 140 , #000000 ,Tunis 6590 , 140 Tunis 6590"},
      { "id":7,"annee": "2011", "immatriculation": "140 Tunis 6590", "couleur": "#000000", "marque": "Chevrolet", "type": "Voiture" ,"description" : "BMW 140 , #000000 ,Tunis 6590 , 140 Tunis 6590"},
      { "id":8,"annee": "2011", "immatriculation": "140 Tunis 6590", "couleur": "#000000", "marque": "Nissan", "type": "Voiture" ,"description" : "BMW 140 , #000000 ,Tunis 6590 , 140 Tunis 6590"},
      { "id":9,"annee": "2011", "immatriculation": "140 Tunis 6590", "couleur": "#000000", "marque": "Volkswagen", "type": "Voiture" ,"description" : "BMW 140 , #000000 ,Tunis 6590 , 140 Tunis 6590"},
      { "id":10,"annee": "2011", "immatriculation": "140 Tunis 6590", "couleur": "#000000", "marque": "Tesla", "type": "Voiture" ,"description" : "BMW 140 , #000000 ,Tunis 6590 , 140 Tunis 6590"}
    ]
  }

  ngOnChanges(changes: SimpleChanges): void {}

  ngOnInit(): void {
    this.carBrandService.fillCarBrandsList().subscribe(
      (brands: CarBrandsList[]) => {
        this.carsBrands = brands;
        console.log(this.carsBrands); 
      },
      (error) => {
        console.log('Error fetching car brands:', error);
      }
    );
    this.form = this.createCarFormGroup()

    
  }
  createCarFormGroup() : FormGroup{
    return new FormGroup({
      annee: new FormControl('', Validators.required),
      immatriculation: new FormControl('', Validators.required),
      couleur: new FormControl('#000000', Validators.required),
      marque: new FormControl('', Validators.required),
      type: new FormControl('Voiture', Validators.required),
    });
  }

  radioClicked() {
    if (this.cm == 'voiture') {
      this.isCar = true;
      this.isMoto = false;
    } else {
      this.isMoto = true;
      this.isCar = false;
    }
  }

  get f() {
    return this.form.controls;
  }
  
  onSubmitCarForm() {
    console.log(this.form);
    const year = this.form.get('annee').value.getFullYear();
    console.log(year);

    if (this.form.valid) {
      console.log(this.form.value);
    }
  }
  addCar() {
    this.displayAddCar = true;
  }
}
