export default {
  globalDate: new Date('12:1:2 9/3/2021'),
  students: [
    {
      firstName: 'panos',
      lastName: 'dimitriadis',
      email: 'jahjah@shit.gr',
      dateOfBirth: '10/01/1987',
      tuitionFees: 2233,
      isActive: false,
      totalScore: null,
      updatedAt: null,
    },
    {
      firstName: 'nikos',
      lastName: 'Petridis',
      email: 'nikos@pet.gr',
      dateOfBirth: '10/21/1984',
      tuitionFees: 2200,
      isActive: false,
      totalScore: null,
      updatedAt: null,
    },
    {
      firstName: 'manos',
      lastName: 'loiziadis',
      email: 'loizi@adis.gr',
      dateOfBirth: '03/03/1967',
      tuitionFees: 2113,
      isActive: false,
      totalScore: null,
      updatedAt: null,
    },
    {
      firstName: 'panos',
      lastName: 'dimitriadis',
      email: 'jahjah@shit.gr',
      dateOfBirth: '10/01/1987',
      tuitionFees: 2233,
      isActive: false,
      totalScore: 400,
    },
  ],
  trainers: [
    {
      firstName: 'giannis',
      lastName: 'mantoudis',
      email: 'giannis@mantoudis.gr',
      dateOfBirth: '09/07/1957',
      monthlyWage: 1100,
    },
    {
      firstName: 'panos',
      lastName: 'mpozas',
      email: 'technolo@guy.gr',
      dateOfBirth: '22/12/1988',
      monthlyWage: 1100,
    },
    {
      firstName: 'tzonis',
      lastName: 'xlis',
      email: 'tzonis@guy.gr',
      dateOfBirth: '21/11/1981',
      monthlyWage: 1000,
    },
  ],
  courses: [
    {
      title: 'CB13',
      type: 'Full-time',
      stream: 'JAVA',
      starts: null,
      ends: null,
    },
    {
      title: 'CB13',
      type: 'Full-time',
      stream: 'Python',
      starts: null,
      ends: null,
    },
    {
      title: 'CB13',
      type: 'Part-time',
      stream: 'JavaScript',
      starts: null,
      ends: null,
    },
    {
      title: 'CB13',
      type: 'Part-time',
      stream: 'C#',
      starts: new Date(),
      ends: new Date(),
    },
  ],
  subjects: [
    {
      title: 'HTML5',
      description: 'Introduction to HTML5 for beginners',
      starts: null,
      ends: null,
    },
    {
      title: 'CSS3',
      description: 'Introduction to CSS3 for beginners',
      starts: null,
      ends: null,
    },
    {
      title: 'OOP',
      description: 'Introduction on Object Oriented Programming for beginners',
      starts: null,
      ends: null,
    },
    {
      title: 'Security',
      description: 'Introduction to Web Security for beginners',
      starts: null,
      ends: null,
    },
  ],
  assignments: [
    {
      title: 'Private School frontend',
      description: 'Implement 5 pages of the private school',
    },
    {
      title: 'Private School backend',
      description: 'Implement 5 pages of the private school',
    },
    {
      title: 'Private School database',
      description: 'Implement DML and DDL of private school',
    },
    {
      title: 'Hotel rental page',
      description: 'Implement landing page of a rental website',
    },
    {
      title: 'Group project',
      description: 'Implement an ecommerce solution',
    },
  ],
};
