import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Validators, FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { Message, SelectItem } from 'primeng/components/common/api';
import { ApiService } from '../../core/api.service';

@Component({
  selector: 'app-profile-details',
  templateUrl: './profile-details.component.html',
  styleUrls: ['./profile-details.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ProfileDetailsComponent implements OnInit {

    recievedFile: File;
    cancelOrEdit: "Edit picture";

    openEditor = false;

    image = '';
    msgs: Message[] = [];
    userform: FormGroup;
    submitted: boolean;
    genders: SelectItem[];
    description: string;
    uploadedFiles: any[] = [];
    demo;
    fileToUpload: File = null;

  constructor(private fb: FormBuilder, private api: ApiService) {}

  ngOnInit() {
    this.userform = this.fb.group({
      'firstname': new FormControl('', Validators.required),
      'lastname': new FormControl('', Validators.required),
      'password': new FormControl('', Validators.compose([Validators.required, Validators.minLength(6)])),
      'description': new FormControl(''),
      'gender': new FormControl('', Validators.required),
    });

    this.genders = [];
    this.genders.push({label: 'Select Gender', value: ''});
    this.genders.push({label: 'Male', value: 'Male'});
    this.genders.push({label: 'Female', value: 'Female'});

    this.getImage();
  }

  onSubmit(value: string) {
    this.submitted = true;
    this.msgs = [];
    this.msgs.push({severity: 'info', summary: 'Success', detail: 'Form Submitted'});
  }

  get diagnostic() { return JSON.stringify(this.userform.value); }

  onBasicUpload(event) {

  }


  // PrimeNG
  prikazi(event: any) {
    this.fileToUpload = event.files[0];
    if (event.files && event.files[0]) {
      const reader = new FileReader();
      reader.onload = (onLoadEvent: any) => {
        this.image = onLoadEvent.target.result;
      };
      reader.readAsDataURL(event.files[0]);
    }
  }

  uploadPicture(event: any) {
    const formData = new FormData();
    formData.append('fileKey', this.fileToUpload, this.fileToUpload.name);
    console.log(formData);
    this.api.postPicture(formData).subscribe(data => this.openEditor = false);
  }

  openPictureEditor() {
    this.openEditor = true;
  }

  closePictureEditor() {
    this.openEditor = false;
  }

  getImage () {
    this.api.getImage().subscribe(data => {
      this.recievedFile = data as File;
      const reader = new FileReader();
      reader.onload = (onLoadEvent: any) => {
        this.croppedImage = onLoadEvent.target.result;
      };
      reader.readAsDataURL(this.recievedFile);
    });
  }

  imageChangedEvent: any = '';
  croppedImage: any = '';
  
  fileChangeEvent(event: any): void {
      this.imageChangedEvent = event;
  }
  imageCropped(image: string) {
      this.croppedImage = image;
  }
  imageLoaded() {
      // show cropper
  }
  loadImageFailed() {
      // show message
  }
  setFile(file) {
    this.fileToUpload = file;
  }
}
