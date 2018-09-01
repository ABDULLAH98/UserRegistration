import { Component } from '@angular/core';
import { FormGroup, FormControl } from '../../../node_modules/@angular/forms';


@Component({
  selector: 'profile-editor',
  templateUrl: 'profile-editor.html'
})
export class ProfileEditorComponent {

  profileForm = new FormGroup({
    firstName : new FormControl,
    lastName : new FormControl
  });

  constructor() {
    
  }
  onSubmit(){
    console.log(this.profileForm.value);
  }

}
