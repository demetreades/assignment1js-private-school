import { v4 as uuid } from 'uuid';
import UtilClass from './utils/UtilClass.js';

export default class Course extends UtilClass {
  constructor(params) {
    super();
    this.id = uuid();
    this.title = params.title;
    this.type = params.type;
    this.stream = params.stream;
    this.starts = new Date();
    this.ends = null;
    this.students = params.students ?? [];
    this.trainers = params.trainers ?? [];
    this.assignments = params.assignments ?? [];
    this.subjects = params.subjects ?? [];
    this.createdAt = new Date();
    this.updatedAt = null;
  }

  dateUtil(date) {
    return new Date(date);
  }

  setEndDate(date) {
    this.ends = new Date(date);
  }

  getFullName = () => {
    return `${this.title} ${this.type} ${this.stream}`;
  };

  toConsoleString() {
    return `Course: ${this.getFullName()}`;
  }
}
