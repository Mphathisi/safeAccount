import { Component, OnInit } from '@angular/core';
import * as firebase from "firebase/app";
import { AlertController , NavController } from '@ionic/angular';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  email:string;
  password:string;

  constructor(private alertController: AlertController
   , private navCtrl: NavController , private loadingController: LoadingController) {


     firebase.auth().onAuthStateChanged((user)=>{
      if(user){

        /* this.navCtrl.navigateForward(['/home']);*/

        //theres a user, then navigate to login

      }else{

        //no user has login
      }
     })




    }

  ngOnInit() {}

  login(){
      this.loadingController.create({
              message: 'Please wait...',
              duration: 1000
              }).then((loading)=>{
                loading.present();
     })
    firebase.auth().signInWithEmailAndPassword(this.email, this.password).then(


       (userObject)=>{
          console.log(userObject);

          //navigate user to home page
           this.navCtrl.navigateRoot("home/menu");


        }).catch((err)=>{
              this.alertController.create({
              header: 'Warning',
              message:err.message,
              buttons: ['OK']
            }).then((alert)=>{
               alert.present();
            })
      
        })
      
    }

  

 
}



