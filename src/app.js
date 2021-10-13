import DATA from '../src/config/DATA.js';
import {
  Student,
  Trainer,
  Course,
  Assignment,
  Subject,
  privateSchool,
} from '../src/models/index.js';
import DateUtil from '../src/models/utils/DateUtil.js';

// console.log(privateSchool);

const {
  students: [panos, nikos, petros],
  trainers: [mantoudis, mpozas, xlis],
  courses: [cb13Java, cb13Python, cb13JS, cb13Csharp],
  subjects: [html5, css3, oop, security],
  assignments: [
    assignment1,
    assignment2,
    assignment3,
    assignment4,
    groupProject,
  ],
} = DATA;

console.log(
  `\n\n[${DateUtil.today}] PROGRAM =========== ============ START \n`
);

//
//

// /////////////////////////////////////////////////////
// /////////////////////////////////////////////////////

// students variables
const student1 = new Student(panos);
const student2 = new Student(nikos);
const student3 = new Student(petros);

// trainers variables
const trainer1 = new Trainer(mantoudis);
const trainer2 = new Trainer(mpozas);
const trainer3 = new Trainer(xlis);

// courses variables
const courseJava = new Course(cb13Java);
const coursePython = new Course(cb13Python);
const courseJS = new Course(cb13JS);
const courseCsharp = new Course(cb13Csharp);

// subjects variables
const subject1 = new Subject(html5);
const subject2 = new Subject(css3);
const subject3 = new Subject(oop);
const subject4 = new Subject(security);

// Assignments variables
const assignment1Private = new Assignment(assignment1);
assignment1Private.setSubDateTime('19:59:00 11/11/2021');
const assignment2Private = new Assignment(assignment2);
const assignment3Private = new Assignment(assignment3);
const assignment4Hotel = new Assignment(assignment4);
const assignmentGroupProject = new Assignment(groupProject);

// Init Course JS ///////////////////////////////////////////

// set end date
courseJS.setEndDate('2021/12/14');
// add subjects to course
courseJS.add('subjects', subject1);
courseJS.add('subjects', subject2);
courseJS.add('subjects', subject3);
courseJS.add('subjects', subject4);
// add students to course
courseJS.add('students', student1);
courseJS.add('students', student2);
courseJS.add('students', student3);
// add trainers to course
courseJS.add('trainers', trainer1);
courseJS.add('trainers', trainer2);
courseJS.add('trainers', trainer3);
// add assignments to course
courseJS.add('assignments', assignment1Private);
courseJS.add('assignments', assignment2Private);
courseJS.add('assignments', assignment3Private);
courseJS.add('assignments', assignment4Hotel);

// remove students
// courseJS.remove('students', student1);
// courseJS.remove('students', student2);
courseJS.remove('students', student3);

// Student /////////////////////////////////////////////
student1.add('courses', courseJS);
student1.add('assignments', assignment1Private);
student1.add('assignments', assignment2Private);
student1.add('assignments', assignment3Private);

student1.submitAssignment(assignment1);
student1.submitAssignment(assignment3);

// Trainer /////////////////////////////////////////////
trainer1.add('subjects', subject1);
trainer1.add('subjects', subject2);
trainer1.add('subjects', subject3);
trainer1.add('subjects', subject4);
// trainer1.getAll('subjects', `Subject of trainer`);

trainer1.giveMarks(student1, 0, 70, 80);
// student1.getAll('assignments', 'Marked Assignment');
// courseJS.getAll('students', 'Course JS Students: ');
courseJS.getAll('trainers', 'Trainers: ');
courseJS.getAll('students', 'Students: ');
courseJS.getAll('assignments', 'Assignments: ');

//
//

console.log(
  `\n[${DateUtil.today}] PROGRAM ============ ============ ENDS \n\n`
);
