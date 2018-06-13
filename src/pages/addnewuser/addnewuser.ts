import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the AddnewuserPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-addnewuser',
  templateUrl: 'addnewuser.html',
})
export class AddnewuserPage {
  firstname: string;
  lastname: string;
  male: boolean;
  female: boolean;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddnewuserPage');
  }

  ionViewWillEnter(){
      console.log('ionviewwillappear addnewuserpage')
  }

  signup(){
    console.log(this.firstname,this.lastname,this.male,this.female)
  }

}
