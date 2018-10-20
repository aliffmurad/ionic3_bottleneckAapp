import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { AngularFireModule} from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { HttpModule } from '@angular/http';


import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { FIREBASE_CONFIG } from './firebase.credentials';
import { RegisterPage } from '../pages/register/register';
import { LoginPage } from '../pages/login/login';
import { AngularFireAuthModule} from 'angularfire2/auth';
import { MainPage } from '../pages/main/main';
import { pcpartlist } from '../services/pcpartlist/pc-part-list.service';
import { ToastService } from '../services/toast/toast.service';
import { ListProcessorProvider } from '../providers/list-processor/list-processor';
import { partlistservice } from '../services/partlist/partlist.service';
import { YtProvider } from '../providers/yt/yt';
import {YoutubeVideoPlayer} from '@ionic-native/youtube-video-player';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    RegisterPage,
    LoginPage

  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(FIREBASE_CONFIG),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    RegisterPage,
    LoginPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    pcpartlist,
    ToastService,
    ListProcessorProvider,
    partlistservice,
    YtProvider,
    YoutubeVideoPlayer
    
  ]
})
export class AppModule {}
