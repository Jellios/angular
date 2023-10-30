import { Timestamp } from "@angular/fire/firestore";

export interface Timer {
    title: string;
    description: string;
    startDate:  Timestamp;
}
