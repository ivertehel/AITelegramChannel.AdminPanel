import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EditCardModalComponent } from './edit-card-modal/edit-card-modal.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  constructor(public dialog: MatDialog) { }
  cardContent = "The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting.";


  editPostCard() {
    const dialogRef = this.dialog.open(EditCardModalComponent, { data: this.cardContent });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
