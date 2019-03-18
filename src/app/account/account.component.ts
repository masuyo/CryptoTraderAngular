import { Component, OnInit } from '@angular/core';
import { RestApiService } from "../shared/rest-api.service";
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  constructor(
    public restApi: RestApiService,
    public router: Router
  ) {}

  ngOnInit() {
  }

  resetAccount() {
    if (window.confirm('Biztosan resetelni szeretnéd az accountod?')) {
      this.restApi.reset().subscribe(data => {
        this.router.navigate(['/account'])
      })
    }
  }

}
