import { Component, Inject, Input } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-yes-cancel-modal',
  templateUrl: './yes-cancel-modal.component.html',
  styleUrls: ['./yes-cancel-modal.component.css']
})
export class YesCancelModalComponent {
  @Input() message: string = "";

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {
    this.message = data;
  }
}
