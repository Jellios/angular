import { Timestamp } from "@angular/fire/firestore";

export interface Timer {
    id: string
    userID: string;
    title: string;
    description: string;
    startDate:  Timestamp;
}
