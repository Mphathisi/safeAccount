import { Component, OnInit } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(public actionSheetController: ActionSheetController ) { }

  ngOnInit() {
  }

   async presentActionSheet() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Transact',
      buttons: [{
        text: 'Pay',
        role: 'destructive',
        handler: () => {
          console.log('Delete clicked');
        }
      }, {
        text: 'Withdraw',
        
        handler: () => {
          console.log('Share clicked');
        }
      },{
        text: 'transfer',
        handler: () => {
          console.log('Favorite clicked');
        }
      }, {
        text: 'Cancel',
        icon: 'close',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    });
    await actionSheet.present();
  }



















}
