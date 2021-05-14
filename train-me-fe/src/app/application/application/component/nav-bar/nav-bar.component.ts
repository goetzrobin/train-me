import {
    ChangeDetectionStrategy,
    Component,
    EventEmitter,
    Output,
} from '@angular/core';

@Component({
    selector: 'app-nav-bar',
    templateUrl: './nav-bar.component.html',
    styleUrls: ['./nav-bar.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavBarComponent {
    @Output()
    public logout = new EventEmitter<void>();
    constructor() {}

    public triggerLogout(): void {
        this.logout.emit();
    }
}
