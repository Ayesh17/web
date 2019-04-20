import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MedicineRoutingModule } from './medicine-routing.module';
import { MedicineComponent } from './medicine.component';
import { PageHeaderModule } from './../../shared';

@NgModule({
    imports: [CommonModule, MedicineRoutingModule, PageHeaderModule],
    declarations: [MedicineComponent]
})
export class MedicineModule {}
