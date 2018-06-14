import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HTTP } from '@ionic-native/http';

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
  gender: any;
  status: any;

  constructor(public navCtrl: NavController, public navParams: NavParams,private http:HTTP) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddnewuserPage');
  }

  ionViewWillEnter(){
      console.log('ionviewwillappear addnewuserpage')
  }

  signup(form){
    console.log(this.firstname,this.lastname,this.gender)
    console.log(form.value)
    this.http.post('https://floating-depths-71852.herokuapp.com/api/user/signup', form.value,{}).then((message) => {
        console.log(message)
        this.navCtrl.pop()
    }).catch((error) => {
        console.log(error)
    })

  }

}
