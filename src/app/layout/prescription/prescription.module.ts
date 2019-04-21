import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrescriptionRoutingModule } from './prescription-routing.module';
import { PrescriptionComponent } from './prescription.component';
import { PageHeaderModule } from '../../shared';

@NgModule({
    imports: [CommonModule, PrescriptionRoutingModule, PageHeaderModule],
    declarations: [PrescriptionComponent]
})
export class PrescriptionModule {}
