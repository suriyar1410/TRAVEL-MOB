import { Component, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-vehicle-details',
  templateUrl: './vehicle-details.page.html',
  styleUrls: ['./vehicle-details.page.scss'],
})
export class VehicleDetailsPage {

  @Input() vehicleDetails: any;  

  constructor(private modalCtrl: ModalController) { }

  isArray(value: any): boolean {
    return Array.isArray(value);
  }

  // Close the modal
  closeModal() {
    this.modalCtrl.dismiss();
  }
}
