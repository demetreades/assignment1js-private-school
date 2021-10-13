import { Student, Trainer, Course, Assignment, Subject } from './index.js';
import DATA from '../config/DATA.js';

const schoolOptions = {
  courses: [],
  students: [],
  trainers: [],
  subjects: [],
  assignments: [],
};

const seeder = (array, Model, array2) => {
  array.forEach((item) => {
    const modeledItem = new Model(item);
    array2.push(modeledItem);
  });
};

seeder(DATA.students, Student, schoolOptions.students);
seeder(DATA.trainers, Trainer, schoolOptions.trainers);
seeder(DATA.courses, Course, schoolOptions.courses);
seeder(DATA.subjects, Subject, schoolOptions.subjects);
seeder(DATA.assignments, Assignment, schoolOptions.assignments);

// console.log(schoolOptions);

class School {
  constructor(params) {
    this.courses = params.courses ?? [];
    this.students = params.students ?? [];
    this.trainers = params.trainers ?? [];
    this.subjects = params.subjects ?? [];
    this.assignments = params.assignments ?? [];
  }
}

export default new School(schoolOptions);
