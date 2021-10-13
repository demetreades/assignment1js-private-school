import { v4 as uuid } from 'uuid';

export default class Subject {
  constructor(params) {
    this.id = uuid();
    this.title = params.title;
    this.description = params.description;
    this.starts = params.starts;
    this.ends = params.ends;
    this.createdAt = new Date();
    this.updatedAt = null;
  }

  getFullName() {
    return `${this.title}`;
  }

  toConsoleString() {
    return `Subject: ${this.getFullName()}`;
  }
}
