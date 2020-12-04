import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserDetailsData } from 'src/app/common/user-details.data';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

    userDetailsData = <UserDetailsData>{};
    constructor(private router: Router) { }

    ngOnInit(): void {
        this.userDetailsData = new UserDetailsData();
    }

    register() {
        console.log("Register");
    }

    login() {
        if (this.userDetailsData.username === "admin") {
            this.router.navigate(["dashboard"])
        }
    }

}
