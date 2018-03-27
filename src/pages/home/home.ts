import { Component } from '@angular/core';
import {ModalController, NavController} from 'ionic-angular';

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
        let profileModal = this.modalCtrl.create('DecathlonCalculatorPage');
        profileModal.present();
        break;
    }
  }

}
