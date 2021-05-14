import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-home-exercise-card',
    templateUrl: './home-exercise-card.component.html',
    styleUrls: ['./home-exercise-card.component.scss'],
})
export class HomeExerciseCardComponent implements OnInit {
    @Input()
    public id: number | undefined;
    @Input()
    public description: string | undefined;
    @Input()
    public name: string | undefined;

    constructor() {}

    ngOnInit(): void {}
}
