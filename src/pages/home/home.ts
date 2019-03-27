import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
  
})
export class HomePage {
information:string;
  constructor(public navCtrl: NavController, private storage: Storage) {

  }
  openStatusPage(){
    this.navCtrl.push('StatusPage');
    
  }

  ionViewWillEnter(){
    this.storage.get("status")
    .then((val) => {
      this.information = val;
    }).catch((err) => {
      console.log(err);
    })
  }

}
