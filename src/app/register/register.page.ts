import { Component, OnInit } from '@angular/core';
import * as firebase from "firebase/app";
import { AlertController } from '@ionic/angular';
import { ToastController , NavController  } from '@ionic/angular';
import { LoadingController } from '@ionic/angular';


@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

    name:string;
    surname:string;
  	email:string;
  	password:string;
   
  	


  constructor(public alertController: AlertController, private navCtrl:NavController , private toastCtrl :ToastController, private loadingController: LoadingController) {}

  ngOnInit() {}

   register(){
    this.loadingController.create({
              message: 'Please wait...',
              duration: 1000
              }).then((loading)=>{
                loading.present();
     })

      firebase.auth().createUserWithEmailAndPassword(this.email, this.password).then(
        (userData)=>{
          console.log(userData);

          //navigate user to login
         this.navCtrl.navigateForward(['/login']); 

          /*name and surname*/
      firebase.firestore().collection("Users").add({
        name: this.name,
        surname: this.surname
      }).then((docRef) =>{
        //promise
        this.toastCtrl.create({
          message:"Name and Surname are added to the  database",
          duration:2000
        }).then((toast)=>{
          toast.present();
          
        })

      }).catch((err)=>{
        //err message

        this.toastCtrl.create({
          message:err.message,
          duration:2000
        }).then((toast)=>{
          toast.present();
        })

      })/*end of name and surname*/

       firebase.auth().currentUser.sendEmailVerification().then(function() {
        alert("Email  verification has been sent");

        
      });


        }).catch((err)=>{
              this.alertController.create({
              header: 'Warning',
              message:err.message,
              buttons: ['OK']
            }).then((alert)=>{
               alert.present();
            })


  


    /* Verification*/


     







    /*End of verification*/



















      
        })
    /* end of the firebase creating user */


    


      
    }/*end of register*/


  



	   

   








}/* end of the class*/





