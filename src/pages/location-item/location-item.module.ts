import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LocationItemPage } from './location-item';

@NgModule({
  declarations: [
    LocationItemPage,
  ],
  imports: [
    IonicPageModule.forChild(LocationItemPage),
  ],
})
export class LocationItemPageModule {}
