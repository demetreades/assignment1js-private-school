import privateSchool from './models/School.js';

const {
  students: [student1, student2, student3, student4],
  trainers: [trainer1, trainer2, trainer3],
  courses: [courseJava, coursePython, courseJS, courseCsharp],
  subjects: [subject1, subject2, subject3, subject4, subject5],
  assignments: [
    assignment1,
    assignment2,
    assignment3,
    assignment4,
    groupProject,
  ],
} = privateSchool;

// /////////////////////////////////////////////////////
// /////////////////////////////////////////////////////

console.log('\n\n[PROGRAM] =========== ============ START \n');

// Init Course JS ///////////////////////////////////////////

// set course end date
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
courseJS.add('students', student4);
// add trainers to course
courseJS.add('trainers', trainer1);
courseJS.add('trainers', trainer2);
courseJS.add('trainers', trainer3);
// add assignments to course
courseJS.add('assignments', assignment1);
courseJS.add('assignments', assignment2);
courseJS.add('assignments', assignment3);
courseJS.add('assignments', assignment4);
// remove students
// courseJS.remove('students', student1);
// courseJS.remove('students', student2);
// courseJS.remove('students', student3);

// Student /////////////////////////////////////////////
student1.add('courses', courseJS);
student1.add('assignments', assignment1);
student1.add('assignments', assignment2);
student1.add('assignments', assignment3);

student1.submitAssignment(assignment1);
student1.submitAssignment(assignment3);

// Trainer /////////////////////////////////////////////
// add trainers to courseJS
trainer1.add('courses', courseJS);
trainer2.add('courses', courseJS);
trainer3.add('courses', courseJS);

// add to trainer1 subjects
trainer1.add('subjects', subject1);
trainer1.add('subjects', subject2);
trainer1.add('subjects', subject3);
trainer1.add('subjects', subject4);

trainer1.giveMarks(student1, 0, 70, 80);
trainer1.giveMarks(student1, 1, 55, 60);

student1.getAll('assignments');

courseJS.getAll('trainers');
courseJS.getAll('assignments');
courseJS.getAll('students');

// /////////////////////////////////////////////////////

console.log('\n[PROGRAM] ============ ============ ENDS \n\n');
