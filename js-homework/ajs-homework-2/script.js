// Fetch the JSON file and process the data
fetch("https://raw.githubusercontent.com/sedc-codecademy/skwd9-04-ajs/main/Samples/students_v2.json")
  .then(response => response.json())
  .then(students => {
    console.log(students);
    // 1. All students with an average grade higher than 3
    const studentsWithHighGrades = [];

    for (let i = 0; i < students.length; i++) {
      const student = students[i];
      if (student.averageGrade > 3) {
        studentsWithHighGrades.push({ firstName: student.firstName, lastName: student.lastName });
      }
    }

    console.log("Students with an average grade higher than 3:", studentsWithHighGrades);

    // 2. All female student names with an average grade of 5
    const femaleStudentsWithPerfectGrade = students
      .filter(student => student.gender === "Female" && student.averageGrade === 5)
      .map(student => student.firstName);
    console.log("Female student names with an average grade of 5:", femaleStudentsWithPerfectGrade);

    // 3. All male student full names who live in Skopje and are over 18 years old
    const maleStudentsInSkopjeOver18 = students
      .filter(student => student.gender === "Male" && student.city === "Skopje" && student.age > 18)
      .map(student => `${student.firstName} ${student.lastName}`);
    console.log("Male students in Skopje over 18 years old:", maleStudentsInSkopjeOver18);

    // 4. The average grade of all female students over the age of 24
    const femaleStudentsOver24 = students.filter(student => student.gender === "Female" && student.age > 24);

    // Calculate the total grades using a for loop
    let totalGrade = 0;
    for (let i = 0; i < femaleStudentsOver24.length; i++) {
      totalGrade += femaleStudentsOver24[i].averageGrade;
    }

    // Calculate the average grade
    let averageGradeOfFemalesOver24;

    if (femaleStudentsOver24.length > 0) {
      averageGradeOfFemalesOver24 = totalGrade / femaleStudentsOver24.length;
    } else {
      averageGradeOfFemalesOver24 = 0;
    }
    console.log("Average grade of female students over the age of 24:", averageGradeOfFemalesOver24);

    // 5. All male students with a name starting with B and average grade over 2
    const maleStudentsStartingWithB = students.filter((student) =>
      student.gender === "Male" &&
      student.firstName[0] === "B" &&
      student.averageGrade > 2
    )
      .map(student => `${student.firstName} ${student.lastName}`);
    console.log("Male students with a name starting with B and average grade over 2:", maleStudentsStartingWithB);
  })
 