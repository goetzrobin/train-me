import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { HomeService } from '../../service/home/home.service';
import { Component, OnInit } from '@angular/core';
import { logout } from 'src/app/shared/module/auth/store/action/logout/logout.action';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
    public response: Observable<string> | undefined;
    constructor(private homeService: HomeService, private store: Store) {}

    public ngOnInit(): void {
        this.response = this.homeService.getHelloWorld();
    }

    public logout(): void {
        this.store.dispatch(logout());
    }
}
