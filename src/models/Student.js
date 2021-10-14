// import { v4 as uuid } from 'uuid';
import UtilClass from './UtilClass.js';

export default class Student extends UtilClass {
  constructor(params) {
    super();
    // this.id = uuid();
    this.firstName = this.properCase(params.firstName);
    this.lastName = this.properCase(params.lastName);
    this.email = params.email;
    this.dateOfBirth = params.dateOfBirth;
    this.tuitionFees = params.tuitionFees;
    this.courses = params?.courses ?? [];
    this.assignments = params?.assignments ?? [];
    this.createdAt = new Date();
    this.updatedAt = null;
  }

  getFullName() {
    return `${this.lastName} ${this.firstName}`;
  }

  toConsoleString() {
    return `Student: ${this.getFullName()}, email: ${this.email}, course: ${
      this.courses[0] ? this.courses[0].getFullName() : 'Not in a course'
    }`;
  }

  submitAssignment(assignment) {
    return Object.assign(assignment, {
      studentDetails: {
        id: this.id,
        fullName: this.getFullName(),
        submittedDate: new Date(),
      },
    });
  }
}
