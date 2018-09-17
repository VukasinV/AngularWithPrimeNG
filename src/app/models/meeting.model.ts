export interface Meeting {
    MeetingId: number;
    Location: string;
    StartsAt: Date;
    Description: string;
    Capacity: number;
    Owner: string;
    Participants: Array<string>;
    OwnerId: number;
    OwnerPicture: any;
}
