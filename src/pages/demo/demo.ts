import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Demo1Page } from '../demo1/demo1';
import { AddnewuserPage } from '../addnewuser/addnewuser';
import { CustomService } from '../../services/custome-service';
import { HTTP } from '@ionic-native/http';

/**
 * Generated class for the DemoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-demo',
  templateUrl: 'demo.html',
})
export class DemoPage {
  items = [{
    "status": "ACTIVE",
    "_id": "5b20814050dfe02f345b66a8",
    "firstName": "Test",
    "lastName": "Test",
    "email": "Test",
    "gender": "Male",
    "dob": "2018-06-13T02:28:16.190Z",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHBpcmVzSW4iOiIyZCIsImRhdGEiOnsic3RhdHVzIjoiQUNUSVZFIiwiX2lkIjoiNWIyMDgxNDA1MGRmZTAyZjM0NWI2NmE4IiwiZmlyc3ROYW1lIjoiVGVzdCIsImxhc3ROYW1lIjoiVGVzdCIsImVtYWlsIjoiVGVzdCIsInBhc3N3b3JkIjoibm5GSGhiZ24vSTRQS25WK1gyT3gvdTY4NU95Y3JsVFdpaGRnbE9UWlVtWnFxazdOVnI0Z3VDQzYxSlpkN0s4eGxacE1zOGJxYkV5cUYzbCtqVjdVK1E9PSIsImdlbmRlciI6Ik1hbGUiLCJkb2IiOiIyMDE4LTA2LTEzVDAyOjI4OjE2LjE5MFoiLCJzYWx0IjoiR1JWQlhXcEFjdnpMeDRTRnhlNE9TUT09In0sImlhdCI6MTUyODg1Njk3OX0.lg1qVtfyd0RlGOEAIpdz4VLxBiWuwDZ0kmYakrg2XNM"
  }]
  constructor(public navCtrl: NavController, public navParams: NavParams, private userservice: CustomService, private http: HTTP) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DemoPage');
  }
 
  ionViewWillEnter(){

    // let headers = {
    //   "Access-Control-Allow-Origin": '*',
    //   'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,OPTIONS',
    //   "Access-Control-Allow-Headers": 'Origin,X-Requested-With,Content-Type,Accept,content-type,application/json'
    // }

    this.http.get('https://floating-depths-71852.herokuapp.com/api/user/getUsersList', {}, { "Access-Control-Allow-Origin": '*' })
      .then((data) => {
        this.items = JSON.parse(data.data).data
       console.log(JSON.parse(data.data).data)

      })
      .catch( (error) => {

       console.log(error)

      });

  }
  
  itemSelected(item){
     // console.log(item)
      this.userservice.storeselecteduser(item)
      this.navCtrl.push(Demo1Page)
  }
  addnewuser(){
    this.navCtrl.push(AddnewuserPage)
  }


}
