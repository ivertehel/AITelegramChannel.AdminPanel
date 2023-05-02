import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EditCardModalComponent } from './edit-card-modal/edit-card-modal.component';
import { YesCancelModalComponent } from '../common/yes-cancel-modal/yes-cancel-modal.component';
import { PublicationsService } from './publications.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  constructor(public publicationsService: PublicationsService, public dialog: MatDialog) { }
  cardContent = "The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting.";

  ngOnInit() {
    var publications = this.publicationsService.getPublications().subscribe(res => {
      console.log(res);

    });
  }

  editPostCard() {
    const dialogRef = this.dialog.open(EditCardModalComponent, { data: this.cardContent });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  deletePostCard() {
    const dialogRef = this.dialog.open(YesCancelModalComponent, { data: "Are you sure you want to delete this publication?" });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  publishPostCard() {
    const dialogRef = this.dialog.open(YesCancelModalComponent, { data: "Are you sure you want to publish it now?" });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
