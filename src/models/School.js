import DATA from '../config/DATA.js';

const schoolOptions = {
  courses: [...DATA.courses],
  students: [...DATA.students],
  trainers: [...DATA.trainers],
  subjects: [...DATA.subjects],
  assignments: [...DATA.assignments],
};

class School {
  constructor(params) {
    this.courses = params.courses ?? [];
    this.students = params.students ?? [];
    this.trainers = params.trainers ?? [];
    this.subjects = params.subjects ?? [];
    this.assignments = params.assigments ?? [];
  }
}

export default new School(schoolOptions);
