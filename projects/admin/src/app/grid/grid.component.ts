import { Component, OnInit } from '@angular/core';
import { User } from '../user.model';
import { DataService } from './data.service';
import {MatDialog, MatDialogRef, MatDialogModule} from '@angular/material/dialog';
import { DialogComponent } from './dialog.component';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent  implements OnInit{
  public data :User[] =[];
  displayedColumns: string[] = ['no','name', 'email', 'address', 'company','action'];

  constructor(private dataService : DataService, public dialog :MatDialog){}

  ngOnInit(): void {
    this.getDataUser();
    // this.data[1].company.name
  }

  getDataUser(){
    this.dataService.getUsers().subscribe(
      (respone) => this.data = respone
    )
  }

  openDialog(element: User){
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '800vw',
      data: {
        data : element
      },
    });
    dialogRef.afterClosed().subscribe(res => {
      console.log(res.data);
    })
  }
}