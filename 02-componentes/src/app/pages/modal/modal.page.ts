import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
})
export class ModalPage implements OnInit {



  constructor (private modalController: ModalController) {
  }
  
  async openMyModal() {
    const myModal = await this.modalController.create({
      component: ModalPage,
      cssClass: 'my-custom-modal-css'
    });
    return await myModal.present();
  }
  ngOnInit() {
  }
}
