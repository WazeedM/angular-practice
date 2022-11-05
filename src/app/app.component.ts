import { Component, OnInit } from '@angular/core';
import { apiDataService } from './app.service';


@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  name = 'Angular';
  users: any;
  constructor(private apiData: apiDataService) {}

  ngOnInit() {
    this.apiData.getApiData().subscribe((res) => {
      this.users = res.data;
      console.log(this.users);
    });
  }
}
