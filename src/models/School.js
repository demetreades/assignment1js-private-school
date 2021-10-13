import DATA from '../config/DATA.js';
import Student from './Student.js';
import Trainer from './Trainer.js';
import Course from './Course.js';
import Assignment from './Assignment.js';
import Subject from './Subject.js';

const schoolOptions = {
  courses: [],
  students: [],
  trainers: [],
  subjects: [],
  assignments: [],
};

const seeder = (DATAarray, Model, optionsArray) => {
  DATAarray.forEach((item) => {
    const modeledItem = new Model(item);
    optionsArray.push(modeledItem);
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
