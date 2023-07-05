interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  readonly fullTimeEmployee: boolean;
  readonly yearsOfExperience?: number;
  readonly location: string;
  [key: string]: any; // Allow any additional attribute
}

interface Directors extends Teacher {
  numberOfReports: number; // Extending the Teacher class
}

function printTeacher(firstName: string, lastName: string): string {
  const firstLetter = firstName.charAt(0);
  return `${firstLetter}. ${lastName}`; // printTeacher function 
}

interface printTeacherFunction {
  (firstName: string, lastName: string): string; // interface specifier
}

interface StudentClassInterface {
  firstName: string;
  lastName: string;
}

class StudentClass implements StudentClassInterface {
  firstName: string;
  lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  workOnHomework(): string {
    return 'Currently working';
  }

  displayName(): string {
    return this.firstName;
  }
}

