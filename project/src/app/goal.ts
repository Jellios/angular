export class Goal {
  id: number;
  startDate: Date;
  titel: string;
  description: string;
  time: string;

  constructor() {
    this.id = 0;
    this.startDate = new Date();
    this.titel = "";
    this.description = "";
    this.time = "";
  }
}

