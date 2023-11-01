import { Timestamp } from "@angular/fire/firestore";

export interface Timer {
    userID: string;
    title: string;
    description: string;
    startDate:  Timestamp;
}
