import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CpuPartsPage } from './cpu-parts';

@NgModule({
  declarations: [
    CpuPartsPage,
  ],
  imports: [
    IonicPageModule.forChild(CpuPartsPage),
  ],
})
export class CpuPartsPageModule {}
