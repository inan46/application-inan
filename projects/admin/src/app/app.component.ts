import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  constructor(private dataService : DataService){}
  ngOnInit(): void {
    this.getDataUser();
  }

  getDataUser(){
    this.dataService.getUsers().subscribe(
      (respone) => console.log(respone)
    )
  }
  title = 'admin';
}
