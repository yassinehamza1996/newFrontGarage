import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';

import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Car } from './models/cars.model';
import { CarBrandsList } from './models/carsbrand.model';
import { CarService } from './services/carBrandsService.service';
import * as _ from 'lodash';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnChanges {
  cities: Car[];
  motosCarList: Car[];
  intializedList: Car[];
  carsBrands: CarBrandsList[];
  selectedcarListModel: Car;
  name = 'Angular';
  isCollapsed = true;
  title = 'gestionGarage';
  cm: string;
  isMoto: boolean = false;
  isCar: boolean = false;
  displayAddCar: boolean = false;
  form: FormGroup;
  selectedItemArray : Car[] = []
  isDisabled:boolean = true;
  constructor(private carBrandService: CarService) {
    this.motosCarList = [
      {
        id: 1,
        annee: '2011',
        immatriculation: '140 Tunis 6590',
        couleur: '#000000',
        marque: 'HARLEY DAVIDSON',
        type: 'Moto',
        description:
          'MOTO HARLEY DAVIDSON 140 , #000000 ,Tunis 6590 , 140 Tunis 6590',
      },
      {
        id: 2,
        annee: '2011',
        immatriculation: '140 Tunis 6590',
        couleur: '#000000',
        marque: 'HONDA',
        type: 'Moto',
        description: 'HONDA 140 , #000000 ,Tunis 6590 , 140 Tunis 6590',
      },
      {
        id: 3,
        annee: '2011',
        immatriculation: '140 Tunis 6590',
        couleur: '#000000',
        marque: 'Audi',
        type: 'Moto',
        description: 'MOTO 140 , #000000 ,Tunis 6590 , 140 Tunis 6590',
      },
      {
        id: 4,
        annee: '2011',
        immatriculation: '140 Tunis 6590',
        couleur: '#000000',
        marque: 'Toyota',
        type: 'Moto',
        description: 'MOTO 140 , #000000 ,Tunis 6590 , 140 Tunis 6590',
      },
      {
        id: 5,
        annee: '2011',
        immatriculation: '140 Tunis 6590',
        couleur: '#000000',
        marque: 'KTM',
        type: 'Voiture',
        description: 'VOITURE 140 , #000000 ,Tunis 6590 , 140 Tunis 6590',
      },
      {
        id: 6,
        annee: '2011',
        immatriculation: '140 Tunis 6590',
        couleur: '#000000',
        marque: 'Ford',
        type: 'Voiture',
        description: 'VOITURE 140 , #000000 ,Tunis 6590 , 140 Tunis 6590',
      },
      {
        id: 7,
        annee: '2011',
        immatriculation: '140 Tunis 6590',
        couleur: '#000000',
        marque: 'KTM',
        type: 'Voiture',
        description: 'VOITURE 140 , #000000 ,Tunis 6590 , 140 Tunis 6590',
      },
      {
        id: 8,
        annee: '2011',
        immatriculation: '140 Tunis 6590',
        couleur: '#000000',
        marque: 'Nissan',
        type: 'Voiture',
        description: 'Voiture 140 , #000000 ,Tunis 6590 , 140 Tunis 6590',
      },
      {
        id: 9,
        annee: '2011',
        immatriculation: '140 Tunis 6590',
        couleur: '#000000',
        marque: 'Volkswagen',
        type: 'Voiture',
        description: 'Voiture 140 , #000000 ,Tunis 6590 , 140 Tunis 6590',
      },
      {
        id: 10,
        annee: '2011',
        immatriculation: '140 Tunis 6590',
        couleur: '#000000',
        marque: 'TVS',
        type: 'Moto',
        description: 'MOTO 140 , #000000 ,Tunis 6590 , 140 Tunis 6590',
      },
    ];

    this.intializedList = [
      {
        id: 1,
        annee: '2011',
        immatriculation: '140 Tunis 6590',
        couleur: '#000000',
        marque: 'HARLEY DAVIDSON',
        type: 'Moto',
        description:
          'MOTO HARLEY DAVIDSON 140 , #000000 ,Tunis 6590 , 140 Tunis 6590',
      },
      {
        id: 2,
        annee: '2011',
        immatriculation: '140 Tunis 6590',
        couleur: '#000000',
        marque: 'HONDA',
        type: 'Moto',
        description: 'HONDA 140 , #000000 ,Tunis 6590 , 140 Tunis 6590',
      },
      {
        id: 3,
        annee: '2011',
        immatriculation: '140 Tunis 6590',
        couleur: '#000000',
        marque: 'Audi',
        type: 'Moto',
        description: 'MOTO 140 , #000000 ,Tunis 6590 , 140 Tunis 6590',
      },
      {
        id: 4,
        annee: '2011',
        immatriculation: '140 Tunis 6590',
        couleur: '#000000',
        marque: 'Toyota',
        type: 'Moto',
        description: 'MOTO 140 , #000000 ,Tunis 6590 , 140 Tunis 6590',
      },
      {
        id: 5,
        annee: '2011',
        immatriculation: '140 Tunis 6590',
        couleur: '#000000',
        marque: 'KTM',
        type: 'Voiture',
        description: 'VOITURE 140 , #000000 ,Tunis 6590 , 140 Tunis 6590',
      },
      {
        id: 6,
        annee: '2011',
        immatriculation: '140 Tunis 6590',
        couleur: '#000000',
        marque: 'Ford',
        type: 'Voiture',
        description: 'VOITURE 140 , #000000 ,Tunis 6590 , 140 Tunis 6590',
      },
      {
        id: 7,
        annee: '2011',
        immatriculation: '140 Tunis 6590',
        couleur: '#000000',
        marque: 'KTM',
        type: 'Voiture',
        description: 'VOITURE 140 , #000000 ,Tunis 6590 , 140 Tunis 6590',
      },
      {
        id: 8,
        annee: '2011',
        immatriculation: '140 Tunis 6590',
        couleur: '#000000',
        marque: 'Nissan',
        type: 'Voiture',
        description: 'Voiture 140 , #000000 ,Tunis 6590 , 140 Tunis 6590',
      },
      {
        id: 9,
        annee: '2011',
        immatriculation: '140 Tunis 6590',
        couleur: '#000000',
        marque: 'Volkswagen',
        type: 'Voiture',
        description: 'Voiture 140 , #000000 ,Tunis 6590 , 140 Tunis 6590',
      },
      {
        id: 10,
        annee: '2011',
        immatriculation: '140 Tunis 6590',
        couleur: '#000000',
        marque: 'TVS',
        type: 'Moto',
        description: 'MOTO 140 , #000000 ,Tunis 6590 , 140 Tunis 6590',
      },
    ];
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
    this.form = this.createCarFormGroup();
  }
  createCarFormGroup(): FormGroup {
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
      this.isDisabled = true;
      this.motosCarList = this.intializedList;
      this.motosCarList = this.motosCarList.filter(
        (item) => item.type == 'Voiture'
      );
    } else if (this.cm == 'moto') {
      this.isDisabled = true;
      this.motosCarList = this.intializedList;
      this.motosCarList = this.motosCarList.filter(
        (item) => item.type == 'Moto'
      );
    } else {
      this.isDisabled = true;
      this.motosCarList = this.intializedList;
    }
  }

  get f() {
    return this.form.controls;
  }

  onSubmitCarForm() {
    const year = this.form.get('annee').value.getFullYear();
    console.log(year);
    let lastItem = this.motosCarList.reverse();

    if (this.form.valid) {
      let carOrMoto = {} as Car;
      carOrMoto.annee = year;
      carOrMoto.couleur = this.form.value.couleur;
      carOrMoto.description =
        this.form.value.type +
        '_' +
        this.form.value.marque.name +
        '_' +
        this.form.value.marque.brand +
        '_' +
        this.form.value.immatriculation;
      carOrMoto.id = lastItem[0].id + 1;
      carOrMoto.marque = this.form.value.marque.brand;
      carOrMoto.type = this.form.value.type;
      this.motosCarList.push(carOrMoto);
      this.motosCarList = _.clone(this.motosCarList);
      console.log(this.form.value);
      this.form.reset();
      this.displayAddCar = false;
    }
  }
  addCar() {
    this.form.value.type;
    this.displayAddCar = true;
  }
  addMoto() {
    this.form.reset();
    this.form.controls['type'].setValue('Moto');
    this.form.controls['couleur'].setValue('#F0000')
    this.displayAddCar = true;
  }
  closePopUp() {
    this.displayAddCar = false;
  }
  showOnTable() {
    console.log(this.selectedcarListModel);
    this.selectedItemArray = [];
    let newItem = {} as Car
    newItem.id = this.selectedcarListModel.id
    newItem.couleur = this.selectedcarListModel.couleur
    newItem.annee = this.selectedcarListModel.annee
    newItem.immatriculation = this.selectedcarListModel.immatriculation
    newItem.description = this.selectedcarListModel.description
    newItem.type = this.selectedcarListModel.type
    newItem.marque = this.selectedcarListModel.marque
    this.isDisabled = false;
    this.selectedItemArray.push(newItem)
  }
  deleteItem(){
    let index = this.motosCarList.findIndex(item=>item.id == this.selectedcarListModel.id)
    if(index != -1){
      this.motosCarList.splice(index,1)
      this.motosCarList = _.clone(this.motosCarList)
    }
  }
}
