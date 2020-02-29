import { Component, OnInit } from '@angular/core'
import { AuthService } from './auth.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { restrictedWords } from 'src/app/products/shared/restricted-words.validator';

@Component({
    templateUrl: './profile.component.html',
    styles: [`
        .error input { background-color: #E3C3C5; }
    `]
})

export class ProfileComponent implements OnInit {

    profileForm:FormGroup

    constructor(private authService:AuthService, private router:Router) {
        
    }

    ngOnInit() {
        let firstName = new FormControl(this.authService.currentUser.firstName, [Validators.required, Validators.pattern('[a-zA-Z].*')])
        let lastName = new FormControl(this.authService.currentUser.lastName, [Validators.required, restrictedWords(['foo', 'bar'])])
        this.profileForm = new FormGroup({
            firstName: firstName,
            lastName: lastName
        })
    }

    saveForm(formValues) {
        this.authService.updateCurrentUser(formValues.firstName, formValues.lastName)
        this.router.navigate(['products'])
    }

    cancel() {
        this.router.navigate(['products'])
    }
}