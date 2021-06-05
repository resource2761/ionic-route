import { Component, OnInit } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { ActionSheetController, AlertController, LoadingController, ModalController, ToastController } from '@ionic/angular';

import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';


@Component({
  selector: 'app-profile-details',
  templateUrl: './profile-details.page.html',
  styleUrls: ['./profile-details.page.scss'],
})
export class ProfileDetailsPage implements OnInit {
  store_image: string = "";

  
  fullname:any;
  experience :any;
  emailid : any;
  phone : any;
  gender :any;
  state :any;
  city: any;
  category:any;
  pincode:any;
  location:any;
  address:any;
  sub_category:any;


  constructor(private camera: Camera,
    private alertCtrl: AlertController,
    private modalCtrl: ModalController,
    private loadingctrl: LoadingController,
    private actionsheetctrl: ActionSheetController,
    private toastctrl: ToastController,
    private activatedroute: ActivatedRoute,
    private navctrl: NavController


  ) {

  }

  ngOnInit() {

    this.activatedroute.queryParams.subscribe(params => {

      this.fullname = params["fullname"];
      this.experience = params["experience"];
      this.category = params["category"];
      this.emailid = params["emailid"];
      this.phone = params["phone"];
      this.gender = params["gender"];
      this.state = params["state"];
      this.city = params["city"];
      this.pincode = params["pincode"];
      this.location = params["location"];
      this.address = params["address"];
      this.sub_category = params["sub_category"];


      
  });


  }


  /* select_media function take image from gallery and camera itself*/

  async select_media() {

    const actionsheet = await this.actionsheetctrl.create({
      header: 'Choose option',
      buttons: [
        {
          text: 'Select an image from Gallery',
          handler: () => {
            this.select_gallery_image();
          }
        },
        {
          text: 'Take a picture using Camera',
          handler: () => {
            this.open_camera();
          }
        },

        {
          text: 'Cancel',
          role: 'cancel'
        }
      ]
    });
    await actionsheet.present();


  }


  // select_gallery_image() to select an image as store photo from gallery

  select_gallery_image() {
    //console.log('Gallery selected')

    let options: CameraOptions = {
      quality: 100,
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
      destinationType: this.camera.DestinationType.DATA_URL,// for base64 image
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      correctOrientation: true,
      targetHeight: 130,
      targetWidth: 160,
      allowEdit: true
    }

    this.camera.getPicture(options).then((base64image) => {
      console.log(base64image);
      this.store_image = "data:image/jpg;base64," + base64image;


    }).catch((error) => {

      const toast = this.toastctrl.create({
        message: 'Image Selection Error, Select a Valid Image',
        duration: 2000,
        buttons: [
          {
            text: 'Close',
            handler: () => {
              console.log('Close clicked');
            }
          }
        ]

      }).then((toastshow) => {
        toastshow.present();
      })

    });



  }

  // end of select_gallery_image() to select an image as store photo from gallery


  // open_camera() to take a picture as store photo 

  open_camera() {
    let options: CameraOptions = {
      quality: 100,
      sourceType: this.camera.PictureSourceType.CAMERA,
      destinationType: this.camera.DestinationType.DATA_URL,// for base64 image
      //encodingType:this.camera.EncodingType.JPEG,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      correctOrientation: true,
      targetHeight: 130,
      targetWidth: 160,
      allowEdit: true
    }

    this.camera.getPicture(options).then((base64image) => {
      console.log(base64image);
      this.store_image = "data:image/png;base64," + base64image;
    }).catch((error) => {

      const toast = this.toastctrl.create({
        message: 'Error in Camera, Required Valid Photo using Camera',
        duration: 2000,
        buttons: [
          {
            text: 'Close',
            handler: () => {
              console.log('Close clicked');
            }
          }
        ]
      }).then((toastshow) => {
        toastshow.present();
      })

      this.store_image = undefined;

    });

  }

  // end of open_camera() to take a picture as store photo 


}
