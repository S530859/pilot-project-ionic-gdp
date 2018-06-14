import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { DemoPage } from '../demo/demo';
import { HTTP } from '@ionic-native/http';
import { AlertController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  email: string = "";
  password: string = "";
  constructor(public modalCtrl: ModalController, public navctrl: NavController, private http: HTTP, private alertCtrl: AlertController) {

  }
  
  signin(form){
    
   /*  let headers = {
      'Content-Type': 'application/json'
    };

    let body = {
      username: this.username,
      password: this.password
    }; */

    this.http.post('https://floating-depths-71852.herokuapp.com/api/user/signin', form.value, {})
      .then((data) => {

        console.log(data)
        const profileModal = this.modalCtrl.create(DemoPage, { userId: 8675309 });
        profileModal.present();

      })
      .catch( (error) => {
       console.log(error)
       let alert = this.alertCtrl.create({
            title: 'Login Failed',
            message: JSON.parse(error.error).message,
            buttons: ['Ok']
          });
          alert.present();
        }) 

    const profileModal = this.modalCtrl.create(DemoPage, { userId: 8675309 });
    profileModal.present();
 
  
 
  }


}
