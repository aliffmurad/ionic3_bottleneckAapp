import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MapNaviPage } from './map-navi';

@NgModule({
  declarations: [
    MapNaviPage,
  ],
  imports: [
    IonicPageModule.forChild(MapNaviPage),
  ],
})
export class MapNaviPageModule {}
