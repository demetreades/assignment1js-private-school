import { v4 as uuid } from 'uuid';

export default class Assignment {
  constructor(params) {
    this.id = uuid();
    this.title = params.title;
    this.description = params.description;
    this.subDateTime = null;
    this.assignmentMarks = null;
    this.oralMarks = null;
    this.totalMarks = null;
    this.isActive = false;
    // this.totalMarks = this.marksCalc(oralMark, assignmentMark);
  }

  dateUtil(date) {
    return new Date(date);
  }

  getFullName = () => {
    return `${this.title}`;
  };

  setSubDateTime() {
    this.subDateTime = this.dateUtil('2021');
  }

  toConsoleString() {
    return `Assignment: ${this.getFullName()}`;
  }
}
