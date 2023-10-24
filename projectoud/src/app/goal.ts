export class Goal {
  id: number;
  startDate: Date;
  title: string;
  description: string;
  time: string;

  constructor() {
    this.id = 0;
    this.startDate = new Date();
    this.title = "";
    this.description = "";
    this.time = "";
  }
}

