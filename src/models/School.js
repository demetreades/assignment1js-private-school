import DATA from '../config/DATA.js';
import Student from './Student.js';
import Trainer from './Trainer.js';
import Course from './Course.js';
import Assignment from './Assignment.js';
import Subject from './Subject.js';

const seeder = (DATAarray, Model, optionsArray = []) => {
  DATAarray.forEach((item) => {
    const modeledItem = new Model(item);
    optionsArray.push(modeledItem);
  });
  return optionsArray;
};

const schoolOptions = {
  courses: seeder(DATA.courses, Course),
  students: seeder(DATA.students, Student),
  trainers: seeder(DATA.trainers, Trainer),
  subjects: seeder(DATA.subjects, Subject),
  assignments: seeder(DATA.assignments, Assignment),
};

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
