import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { SelectItem } from 'primeng/api';
import { ApiService } from '../../core/api.service';
import { Meeting } from '../../models/meeting.model';

@Component({
  selector: 'meetup-table',
  templateUrl: './meetup-table.component.html',
  styleUrls: ['./meetup-table.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class MeetupTableComponent implements OnInit {

    meetings: Meeting[];
    selectedMeeting: Meeting;
    displayDialog: boolean;
    sortOptions: SelectItem[];
    sortKey: string;
    sortField: string;
    sortOrder: number;

    loading = true;

  constructor(private api: ApiService) { }

    ngOnInit() {
        this.api.getMeetings().subscribe(data => {
            this.meetings = data as Meeting[];
            this.showOwnerPicture(this.meetings);
        });

        this.sortOptions = [
            {label: 'Newest First', value: 'startsAt'},
            {label: 'Oldest First', value: '!startsAt'},
            {label: 'Description', value: 'description'}
        ];
    }

  

    showOwnerPicture(meetings: Meeting[]) {
        meetings.forEach(meeting => {
            this.api.getOwnerImage(meeting.OwnerId).subscribe(data => {
                const recievedFile = data as File;
                const reader = new FileReader();
                reader.onload = (onLoadEvent: any) => {
                    meeting.OwnerPicture = onLoadEvent.target.result;
                };
                reader.readAsDataURL(recievedFile);
                this.loading = false;
            });
        });
    }

    selectCar(event: Event, meeting) {
        this.selectedMeeting = meeting;
        this.displayDialog = true;
        event.preventDefault();
    }

    onSortChange(event) {
        let value = event.value;

        if (value.indexOf('!') === 0) {
            this.sortOrder = -1;
            this.sortField = value.substring(1, value.length);
        }
        else {
            this.sortOrder = 1;
            this.sortField = value;
        }
    }

    onDialogHide() {
        this.selectedMeeting = null;
    }

}
