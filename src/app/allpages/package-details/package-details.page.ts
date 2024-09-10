import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-package-details',
  templateUrl: './package-details.page.html',
  styleUrls: ['./package-details.page.scss'],
})
export class PackageDetailsPage  {
  package: any;

  constructor(private router: Router) {
    // Retrieve package data from the state
    if (this.router.getCurrentNavigation()?.extras.state) {
      this.package = this.router.getCurrentNavigation()?.extras.state?.['package'];
    }
  }

  closebtn(){
    this.router.navigate(['/producthome']);
  }

}
