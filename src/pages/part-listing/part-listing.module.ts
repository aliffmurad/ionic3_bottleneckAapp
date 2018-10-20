import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PartListingPage } from './part-listing';

@NgModule({
  declarations: [
    PartListingPage,
  ],
  imports: [
    IonicPageModule.forChild(PartListingPage),
  ],
})
export class PartListingPageModule {}
