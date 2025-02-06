//Module List
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminTemplateRoutingModule } from './admin-template-routing.module';
import { LayoutsModule } from '../../layouts/layouts.module';

//Component List
import { AdminTemplateComponent } from './admin-template.component';


//Import List 
const importList = [
  CommonModule,
  AdminTemplateRoutingModule,
  LayoutsModule
];
@NgModule({
  declarations: [AdminTemplateComponent],
  imports: [...importList],
  exports: [AdminTemplateComponent]
})
export class AdminTemplateModule { }
