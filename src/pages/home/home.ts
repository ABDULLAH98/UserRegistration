import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { RegistrationFormPage} from '../registration-form/registration-form'
import { ProfileEditorComponent } from '../../components/profile-editor/profile-editor';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
  loginPage()
  {
    console.log("loginPage Function called");
    this.navCtrl.push(LoginPage);
  }
  registerPage()
  {
    console.log("registeration page function called");
    this.navCtrl.push(RegistrationFormPage);
  }
  profilePage(){
    this.navCtrl.push(ProfileEditorComponent);
  }

}
