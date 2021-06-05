import { IonRadioGroup } from '@ionic/angular';
import { Component, OnInit, ViewChild } from '@angular/core';
import { AlertController, IonSelect, NavController } from '@ionic/angular';
import { NavigationExtras } from '@angular/router';


@Component({
  selector: 'app-tab5',
  templateUrl: './tab5.page.html',
  styleUrls: ['./tab5.page.scss'],
})
export class Tab5Page implements OnInit {

  @ViewChild('radioGroup') radioGroup: IonRadioGroup
  choice:any;
 

  constructor(
  private alertController: AlertController,
  private navctrl: NavController
  ) { }

  ngOnInit() {

  }


  login()
  {
    const navparameters: NavigationExtras = {
      queryParams: {
          fullname: 'Moumita Ghosh',
          experience:'5 Years',
          emailid:'undercontest2@gmail.com',
          phone:'7595928145',
          gender:'Female',
          state:'West Bengal',
          city:'Kolkata',
          pincode:'700066',
          location:'',
          address:'Santoshpur Bidhangarh South, Kolkata',
          category:'Academic',
          sub_category:'Class - 1, Class - 3, Class - 5'

      }
  };

    this.navctrl.navigateForward(['/profile-details'],navparameters)

  }


}
