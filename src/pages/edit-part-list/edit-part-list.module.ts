import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EditPartListPage } from './edit-part-list';

@NgModule({
  declarations: [
    EditPartListPage,
  ],
  imports: [
    IonicPageModule.forChild(EditPartListPage),
  ],
})
export class EditPartListPageModule {}
