import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddPcPartPage } from './add-pc-part';

@NgModule({
  declarations: [
    AddPcPartPage,
  ],
  imports: [
    IonicPageModule.forChild(AddPcPartPage),
  ],
})
export class AddPcPartPageModule {}
