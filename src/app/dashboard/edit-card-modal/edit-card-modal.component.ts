import { Component, Inject, Input } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-edit-card-modal',
  templateUrl: './edit-card-modal.component.html',
  styleUrls: ['./edit-card-modal.component.css']
})
export class EditCardModalComponent {
  @Input() content: string = "";

  uploadedImage: string = "";

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {
    this.content = data;
  }

  selectImage(): void {
  }

  onMouseEnter(hoverName: HTMLElement) {
    hoverName.style.border = "1px solid #7b1fa2";
  }

  onMouseOut(hoverName: HTMLElement) {
    hoverName.style.border = "1px solid white";
  }

  onFileChanged(event: any) {
    const reader = new FileReader();

    if (event.target.files && event.target.files.length) {
      const [file] = event.target.files;
      reader.readAsDataURL(file);

      reader.onload = () => {
        this.uploadedImage = reader.result as string;
      };
    }
  }
}
