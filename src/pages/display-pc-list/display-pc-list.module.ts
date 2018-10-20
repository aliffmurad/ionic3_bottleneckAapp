import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DisplayPcListPage } from './display-pc-list';

@NgModule({
  declarations: [
    DisplayPcListPage,
  ],
  imports: [
    IonicPageModule.forChild(DisplayPcListPage),
  ],
})
export class DisplayPcListPageModule {}
