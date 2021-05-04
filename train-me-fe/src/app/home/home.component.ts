import { Observable } from 'rxjs';
import { HomeService } from './home.service';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
    public response: Observable<string> | undefined;
    constructor(private homeService: HomeService) {}

    public ngOnInit(): void {
        this.response = this.homeService.getHelloWorld();
    }
}
