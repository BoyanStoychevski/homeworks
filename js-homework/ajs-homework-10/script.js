// *** ACADEMY ***
const Academy = {
    name: "",
    students: [],
    subjects: [],
    start: null,
    end: null,

    get numberOfClasses() {
        return this.subjects.length * 10;
    },

    printStudents() {
        console.log("Students in", this.name);
        this.students.forEach(student => console.log(`${student.firstName} ${student.lastName}`));
    },

    printSubjects() {
        console.log("Subjects in", this.name);
        this.subjects.forEach(subject => console.log(subject.title));
    }
};

// *** SUBJECT ***
const Subject = {
    title: "",
    numberOfClasses: 10,
    isElective: false,
    academy: null,
    students: [],

    overrideClasses(number) {
        if (number >= 3) {
            this.numberOfClasses = number;
        } else {
            console.log("Number of classes cannot be less than 3.");
        }
    }
};

// *** STUDENT ***
const Student = {
    firstName: "",
    lastName: "",
    age: null,
    completedSubjects: [],
    academy: null,
    currentSubject: null,

    startAcademy(academy) {
        this.academy = academy;
        academy.students.push(this);
    },

    startSubject(subject) {
        if (!this.academy) {
            console.log("Student must be enrolled in an academy first.");
            return;
        }
        if (!this.academy.subjects.includes(subject)) {
            console.log("Subject does not belong to the student's academy.");
            return;
        }
        this.currentSubject = subject;
        subject.students.push(this);
    }
};

// *** INSTITUTION ***
const Institution = Object.create(Academy);
Institution.id = null;
Institution.location = "";
Institution.capacity = 0;

Institution.validateCapacity = function() {
    if (this.capacity < 1) {
        throw new Error("Capacity must be at least 1.");
    }
};

// *** COURSE ***
const Course = Object.create(Subject);
Course.id = null;
Course.description = "";
Course.price = 0;

Course.validatePrice = function() {
    if (this.price < 0) {
        throw new Error("Price cannot be negative.");
    }
};

// *** PERSON ***
const Person = Object.create(Student);
Person.id = null;
Person.email = "";
Person.phone = "";

Person.validateEmail = function() {
    if (!this.email.includes("@")) {
        throw new Error("Invalid email address.");
    }
};

// EXAMPLE 

// *** ACADEMY ***
const techAcademy = Object.create(Institution);
techAcademy.id = 1;
techAcademy.name = "Qinshift Academy";
techAcademy.location = "Skopje";
techAcademy.capacity = 30;
techAcademy.start = new Date("2024-10-15");
techAcademy.end = new Date("2025-10-15");
techAcademy.students = [];
techAcademy.subjects = [];
techAcademy.validateCapacity();

console.log(techAcademy);

// *** SUBJECT ***
const javascriptCourse = Object.create(Course);
javascriptCourse.id = 2;
javascriptCourse.title = "JavaScript";
javascriptCourse.description = "Learn JavaScript basic.";
javascriptCourse.price = 1500;
javascriptCourse.academy = techAcademy;
techAcademy.subjects.push(javascriptCourse);
javascriptCourse.validatePrice();

const pythonCourse = Object.create(Course);
pythonCourse.id = 3;
pythonCourse.title = "Python";
pythonCourse.description = "Learn Python basic.";
pythonCourse.price = 1200;
pythonCourse.academy = techAcademy;
techAcademy.subjects.push(pythonCourse);
pythonCourse.validatePrice();

console.log(javascriptCourse);
console.log(pythonCourse);

// *** STUDENT ***
const student1 = Object.create(Person);
student1.id = 1;
student1.firstName = "Bojan";
student1.lastName = "Stojcevski";
student1.age = 40;
student1.email = "bojan.stojcevski@example.com";
student1.phone = "123-456-789";
student1.validateEmail();
student1.startAcademy(techAcademy);
student1.startSubject(javascriptCourse);

const student2 = Object.create(Person);
student2.id = 2;
student2.firstName = "Aleksandar";
student2.lastName = "Spasenoski";
student2.age = 25;
student2.email = "aleksandar.spasenoski@example.com";
student2.phone = "555-666-999";
student2.validateEmail();
student2.startAcademy(techAcademy);
student2.startSubject(pythonCourse);

console.log(student1);
console.log(student2);


techAcademy.printStudents();
techAcademy.printSubjects();
