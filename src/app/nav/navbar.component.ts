import { Component } from '@angular/core';
import { AuthService } from 'src/user/auth.service';

@Component({
    selector: 'navbar',
    templateUrl: './navbar.component.html',
    styles: [`
        .navbar-nav { font-size: 15px; }
    `]
})

export class NavbarComponent {

    constructor(private authService:AuthService) {

    }

    
}