import { Observable } from 'rxjs';
import { AppService } from './app.service';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
    public response: Observable<string> | undefined;
    constructor(private appService: AppService) {}

    public ngOnInit(): void {
        this.response = this.appService.getHelloWorld();
    }
}
