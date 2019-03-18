import { Component, OnInit } from '@angular/core';
import { RestApiService } from "../shared/rest-api.service";
import { Observable } from 'rxjs';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  constructor(
    public restApi: RestApiService
  ) {}

  ngOnInit() {
  }

  resetAccount() {
    this.restApi.reset().subscribe();
  }

}
