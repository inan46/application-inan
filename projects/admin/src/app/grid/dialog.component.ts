import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { User } from '../user.model';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.scss']
})
export class DialogComponent {
    public dataUser : User;
 
    constructor(
    private dialog: MatDialogRef<DialogComponent>,
    @Inject(MAT_DIALOG_DATA)
    public data: {
        data : User
    }
 ){
    this.dataUser = data.data;
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