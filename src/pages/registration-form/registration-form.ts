import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage} from '../home/home';
import { IonicStorageModule} from '@ionic/storage';
import { UIEventManager } from '../../../node_modules/ionic-angular/umd/gestures/ui-event-manager';
import { FormBuilder,FormGroup,Validator, Validators,FormControl,ReactiveFormsModule} from '@angular/forms';


@IonicPage()
@Component({
  selector: 'page-registration-form',
  templateUrl: 'registration-form.html',
})
export class RegistrationFormPage {

  
  userArray = [];
  userValidation = new FormGroup({
    name : new FormControl('',Validators.required),
    fatherName : new FormControl('',Validators.required),
    address : new FormControl('',Validators.required),
    userName : new FormControl('',[Validators.required,Validators.minLength(5),Validators.maxLength(10)]),
    userPassword : new FormControl('',[Validators.required,Validators.minLength(5),Validators.maxLength(10)])
    
  });
  
  constructor(public navCtrl: NavController, public navParams: NavParams) {   
  }
  
  saveDetails()
  {
    localStorage.clear();
    console.log(this.userValidation.value);
    console.log("Home Page called from Registration Page");
    var  uObject = this.userValidation.value;
    console.log(uObject);
    
    if (localStorage.getItem('userArrayKey') == 'undefined')
    {
      
      localStorage.setItem('userArrayKey',JSON.stringify(userArray));
    }
    var key = localStorage.getItem('userArrayKey');
    if (key == null)
    {
      var userArray = [];
      userArray.push(uObject);
      localStorage.setItem('userArrayKey',JSON.stringify(userArray));
    }

    else{
      var objUserArray = JSON.parse(localStorage.getItem('userArrayKey'));
      objUserArray.push(uObject);
      console.log(this.userValidation.value);
      console.log(typeof objUserArray);
      localStorage.setItem('userArrayKey',JSON.stringify(objUserArray));
     console.log('hello',objUserArray);
      }
    this.navCtrl.push(HomePage);
  }
  
 
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad RegistrationFormPage');
  }

}
