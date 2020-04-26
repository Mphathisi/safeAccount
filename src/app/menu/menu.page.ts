import { Component, OnInit } from '@angular/core';
import * as firebase from "firebase/app";
import { AlertController , NavController } from '@ionic/angular';
import { LoadingController } from '@ionic/angular';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {
	users:any[];

  constructor(private navCtrl: NavController, public alertController: AlertController) {
  	this.getUsers();
  }

  getUsers(){
  firebase.firestore().collection("Users").get().then((queryDocumentSnapshot)=>{
  	console.log(queryDocumentSnapshot.docs);
  	this.users = queryDocumentSnapshot.docs;
  }).catch((err)=>{
  	console.log(err);
  })

  }




  ngOnInit() {}

  logout(){
    firebase.auth().signOut().then(function() {
        // Sign-out successful.

      }).catch(function(error) {
        // An error happened.
      });

       /*this.router.navigate(['/login']);*/
      }



      async presentAlertPrompt() {
    const alert = await this.alertController.create({
      header: 'Link Account',
      inputs: [
        {
          name: 'name1',
          type: 'text',
          placeholder: 'Account Holder name'
        },
        {
          name: 'name2',
          type: 'text',
          id: 'name2-id',
          placeholder: 'Identity number'
        },
         {
          name: 'name1',
          type: 'number',
          placeholder: 'Account number'
        },
         {
          name: 'name1',
          type: 'text',
          placeholder: 'First Name'
        },
         {
          name: 'name1',
          type: 'text',
          placeholder: 'Surname'
        },
      
        // input date without min nor max
        {
          name: 'name5',
          type: 'date'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Ok',
          handler: () => {
            console.log('Confirm Ok');

          }
        }
      ]
    });

    await alert.present();
  }//link acount






 

}
