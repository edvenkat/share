import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SocialSharing } from '@ionic-native/social-sharing';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController,private socialSharing: SocialSharing) {

  }
  
  doShareViaTwitter() {
	  this.socialSharing.shareViaTwitter("test message","imageurl","siteurl");
  }
  
  doShareViaFacebook() {
	  this.socialSharing.shareViaFacebook("test message","imageurl","siteurl");
  }
  
  doShareViaInstagram() {
	  this.socialSharing.shareViaInstagram("test message","imageurl");
  }
  
  doShareViaWhatsApp() {
	  this.socialSharing.shareViaWhatsApp("test message","imageurl","siteurl");
  }

}
