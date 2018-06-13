import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CustomService } from '../../services/custome-service';

/**
 * Generated class for the Demo1Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-demo1',
  templateUrl: 'demo1.html',
})
export class Demo1Page {
  selecteduser: any;
  constructor(public navCtrl: NavController, public navParams: NavParams,private userservice: CustomService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Demo1Page');
  }
  ionViewWillEnter(){
    this.selecteduser = this.userservice.getselecteduser();
  }

}
