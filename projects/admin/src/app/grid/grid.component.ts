import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';
import {MatDialog, MatDialogRef, MatDialogModule} from '@angular/material/dialog';
import { DialogComponent } from './dialog.component';
import { IUser, User } from '../user.model';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent  implements OnInit{
  public data :IUser[] =[];
  displayedColumns: string[] = ['no','name', 'email', 'address', 'company','action'];

  constructor(private dataService : DataService, public dialog :MatDialog){}

  ngOnInit(): void {
    this.getDataIUser();
    // this.data[1].company.name
  }

  getDataIUser(){
    this.dataService.getIUsers().subscribe(
      (respone) => this.data = respone
    )
  }

  openDialog(element?: IUser){
    let edit = true;
    if(!element){
      element = new User;
      edit = false;
    }
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '50vw',
      data: {
        data : element
      },
    });
    dialogRef.afterClosed().subscribe(res => {
      if(!edit){
        this.createUser(res.data);
      }else{
        this.updateUser(res.data);
      }
    })
  }

  createUser(element : IUser){
    this.dataService.createUser(element).subscribe(
      (response) => console.log("Respone Add ",response)
    )
  }

  updateUser(element : IUser){
    this.dataService.updateUser(element).subscribe(
      (response) => console.log("Respone edit ",response)
    )
  }

  deleteUser(element: IUser){
    if(element.id){
      this.dataService.deleteUser(element.id).subscribe(
        (response) => console.log("response Delete", response)
      )
    }
    
  }
}