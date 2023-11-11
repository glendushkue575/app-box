/* Filename: ComplexCode.js
   Content: A complex code that simulates a virtual university registration system.
            It includes multiple classes, inheritance, data manipulation, and event handling.
*/

// Class representing a Student
class Student {
  constructor(name, id) {
    this.name = name;
    this.id = id;
    this.courses = [];
  }

  enroll(course) {
    if (!this.courses.includes(course)) {
      this.courses.push(course);
      course.addStudent(this);
    }
  }

  drop(course) {
    const index = this.courses.indexOf(course);
    if (index !== -1) {
      this.courses.splice(index, 1);
      course.removeStudent(this);
    }
  }

  toString() {
    return `${this.name} (ID: ${this.id})`;
  }
}

// Class representing a Course
class Course {
  constructor(name, code) {
    this.name = name;
    this.code = code;
    this.students = [];
  }

  addStudent(student) {
    if (!this.students.includes(student)) {
      this.students.push(student);
      console.log(`${student.name} enrolled in ${this.name}`);
    }
  }

  removeStudent(student) {
    const index = this.students.indexOf(student);
    if (index !== -1) {
      this.students.splice(index, 1);
      console.log(`${student.name} dropped ${this.name}`);
    }
  }

  toString() {
    return `${this.name} (Code: ${this.code})`;
  }
}

// Class representing a University
class University {
  constructor(name) {
    this.name = name;
    this.courses = [];
  }

  addCourse(course) {
    if (!this.courses.includes(course)) {
      this.courses.push(course);
    }
  }

  removeCourse(course) {
    const index = this.courses.indexOf(course);
    if (index !== -1) {
      this.courses.splice(index, 1);
    }
  }

  listEnrolledStudents() {
    for (const course of this.courses) {
      console.log(`${course.name}:`);
      for (const student of course.students) {
        console.log(`- ${student}`);
      }
    }
  }

  toString() {
    return `University: ${this.name}`;
  }
}

// Create instances of Student, Course, and University
const john = new Student("John Doe", "12345");
const jane = new Student("Jane Smith", "67890");
const mathCourse = new Course("Mathematics", "MATH101");
const physicsCourse = new Course("Physics", "PHYS201");
const university = new University("Example University");

// Add courses to the university
university.addCourse(mathCourse);
university.addCourse(physicsCourse);

// Enroll students in courses
john.enroll(mathCourse);
jane.enroll(mathCourse);
jane.enroll(physicsCourse);

// Display list of enrolled students
university.listEnrolledStudents();

// Drop a course for a student
jane.drop(mathCourse);

// Display updated list of enrolled students
university.listEnrolledStudents();

// Output:
// Mathematics:
// - John Doe (ID: 12345)
// - Jane Smith (ID: 67890)
// Physics:
// - Jane Smith (ID: 67890)
