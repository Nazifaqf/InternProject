import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination'; // Import the NgxPaginationModule

import { IonicModule } from '@ionic/angular';

import { TableUIPageRoutingModule } from './table-ui-routing.module';

import { TableUIPage } from './table-ui.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TableUIPageRoutingModule,
    NgxPaginationModule
  ],
  declarations: [TableUIPage]
})
export class TableUIPageModule {}
