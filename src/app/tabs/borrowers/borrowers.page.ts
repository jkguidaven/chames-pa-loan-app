import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AddBorrowerComponent } from 'src/app/modals/add-borrower/add-borrower.component';

@Component({
  selector: 'app-borrowers',
  templateUrl: './borrowers.page.html',
  styleUrls: ['./borrowers.page.scss'],
})
export class BorrowersPage implements OnInit {

  constructor(private modalController: ModalController) { }

  ngOnInit() {}

  async showAddBorrowerModal() {
    const modal = await this.modalController.create({
      component: AddBorrowerComponent
    });

    await modal.present();
  }
}
