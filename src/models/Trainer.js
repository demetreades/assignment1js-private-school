import { v4 as uuid } from 'uuid';
import UtilClass from './utils/UtilClass.js';

export default class Trainer extends UtilClass {
  constructor(params) {
    super();
    this.id = uuid();
    this.firstName = this.properCase(params.firstName);
    this.lastName = this.properCase(params.lastName);
    this.email = params.email;
    this.dateOfBirth = params.dateOfBirth;
    this.subjects = params.subjects ?? [];
    this.courses = params.courses ?? [];
    this.createdAt = new Date();
    this.updatedAt = null;
  }

  getFullName() {
    return `${this.lastName} ${this.firstName}`;
  }

  calcTotalMarks(oralMark, assignmentMark) {
    return (oralMark * 40 + assignmentMark * 60) / (40 + 60);
  }

  giveMarks(student, assignmentIndex, oralMarks, assignmentMarks) {
    const assignment = student.assignments[assignmentIndex];
    return Object.assign(assignment, {
      isActive: false,
      oralMarks,
      assignmentMarks,
      totalMarks: this.calcTotalMarks(oralMarks, assignmentMarks),
      trainerDetails: {
        id: this.id,
        fullName: this.getFullName(),
        markedDateTime: new Date(),
      },
    });
  }

  toConsoleString() {
    return `Trainer: ${this.getFullName()}, email: ${this.email} ${
      this.courses[0] ? this.courses[0].getFullName() : 'Not in a course'
    }`;
  }
}
