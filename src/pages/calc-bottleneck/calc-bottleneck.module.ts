import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CalcBottleneckPage } from './calc-bottleneck';

@NgModule({
  declarations: [
    CalcBottleneckPage,
  ],
  imports: [
    IonicPageModule.forChild(CalcBottleneckPage),
  ],
})
export class CalcBottleneckPageModule {}
