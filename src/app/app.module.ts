import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule, Form } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { IonicStorageModule} from '@ionic/storage';
import { FormBuilder,FormGroup,Validator,ReactiveFormsModule, FormsModule,FormControl} from '@angular/forms';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { RegistrationFormPage} from '../pages/registration-form/registration-form'
import {ProfileEditorComponent} from '../components/profile-editor/profile-editor'
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    RegistrationFormPage,
    ProfileEditorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,RegistrationFormPage,ProfileEditorComponent
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    IonicStorageModule,
    
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AppModule {}
