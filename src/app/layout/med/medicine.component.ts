import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';

@Component({
    selector: 'app-form',
    templateUrl: './medicine.component.html',
    styleUrls: ['./medicine.component.scss'],
    animations: [routerTransition()]
})
export class MedicineComponent implements OnInit {
    constructor() {}

    ngOnInit() {}
}