import { Component } from '@angular/core';
import { UploadService } from "../services/upload.service";

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.scss']
})
export class FileUploadComponent {
  constructor(private uploadService: UploadService) { }

  INPUT_NAME = 'uploadFile';
  fileName: string = '';
  fileData: any;

  onFileSelect(event: any): void {
    const file:File = event.target.files[0];

    if (file) {
      this.fileName = file.name;
      this.fileData = file;
    }
  }

  onSubmitClick() {
    const formData = new FormData();
    formData.append(this.INPUT_NAME, this.fileData);

    const upload$ = this.uploadService.post('http://127.0.0.1:3300/api/file', formData);

    upload$.subscribe();
  }
}
