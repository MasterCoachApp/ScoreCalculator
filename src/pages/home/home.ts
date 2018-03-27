import { Component } from '@angular/core';
import {ModalController, NavController} from 'ionic-angular';
import {HeptathlonMCalculatorPage} from "../calculators/heptathlon-m-calculator/heptathlon-m-calculator";
import {PentathlonMCalculatorPage} from "../calculators/pentathlon-m-calculator/pentathlon-m-calculator";
import {HeptathlonWCalculatorPage} from "../calculators/heptathlon-w-calculator/heptathlon-w-calculator";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public modalCtrl: ModalController) {

  }

  displayCalculator(type: string) {
    switch(type) {
      case 'decathlon':
        this.modalCtrl.create('DecathlonCalculatorPage').present();
        break;
      case 'heptathlonM':
         this.modalCtrl.create('HeptathlonMCalculatorPage').present();
         break;
      case 'pentathlonM':
         this.modalCtrl.create('PentathlonMCalculatorPage').present();
         break;
      case 'heptathlonW':
            this.modalCtrl.create('HeptathlonWCalculatorPage').present();
            break;
      case 'pentathlonW':
            this.modalCtrl.create('PentathlonWCalculatorPage').present();
            break;
    }
  }

}
