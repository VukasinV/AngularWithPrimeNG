import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ApiService } from '../../core/api.service';

@Component({
  selector: 'app-review-list',
  templateUrl: './review-list.component.html',
  styleUrls: ['./review-list.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ReviewListComponent implements OnInit {

  image;
  recievedFile: File;
  constructor(private api: ApiService) { }

  ngOnInit() {
    this.api.getImage().subscribe(data => {
      this.recievedFile = data as File;
      const reader = new FileReader();
      reader.onload = (onLoadEvent: any) => {
        this.image = onLoadEvent.target.result;
      };
      reader.readAsDataURL(this.recievedFile);
    });
  }

}
