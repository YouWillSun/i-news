import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';

import { MinePage } from './mine.page';

import { HeaderModule } from '../components/header/header.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HeaderModule,
    RouterModule.forChild([{ path: '', component: MinePage }])
  ],
  declarations: [MinePage]
})
export class MinePageModule { }
