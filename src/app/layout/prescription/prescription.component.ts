import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';

@Component({
    selector: 'app-form',
    templateUrl: './prescription.component.html',
    styleUrls: ['./prescription.component.scss'],
    animations: [routerTransition()]
})
export class PrescriptionComponent implements OnInit {
    constructor() {}

    ngOnInit() {}
}