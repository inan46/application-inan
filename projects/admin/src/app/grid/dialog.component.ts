import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { IUser } from '../user.model';


@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.scss']
})
export class DialogComponent {
    public dataUser : IUser;
 
    constructor(
    private dialog: MatDialogRef<DialogComponent>,
    @Inject(MAT_DIALOG_DATA)
    public data: {
        data : IUser
    }
 ){
    this.dataUser = data.data;
    //this.dataUser.
 }

 openCancelDialog(){
    this.dialog.close();
 }

 onSave(){
    this.dialog.close({
        data : this.dataUser
      });
 }
}