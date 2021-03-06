import { Component, OnInit } from '@angular/core';
import { RestApiService } from '../shared/rest-api.service';
import { Router } from '@angular/router';
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
    if (window.confirm('Biztosan törölni szeretnéd a tranzakcióid?')) {
      this.restApi.reset().subscribe(() => {
        this.router.navigate(['/account']);
      });
    }
  }
}
