import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ClassSubNewsPageRoutingModule } from './class-sub-news-routing.module';

import { ClassSubNewsPage } from './class-sub-news.page';
import { HeaderModule } from 'src/app/components/header/header.module';
import { NewsModule } from 'src/app/components/news/news.module';
import { NodataModule } from 'src/app/components/nodata/nodata.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HeaderModule,
    NewsModule,
    NodataModule,
    ClassSubNewsPageRoutingModule
  ],
  declarations: [ClassSubNewsPage]
})
export class ClassSubNewsPageModule { }
