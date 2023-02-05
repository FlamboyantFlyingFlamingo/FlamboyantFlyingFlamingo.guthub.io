const form = document.querySelector('#gpa-form');
const coursesDiv = document.querySelector('#courses');
const addCourseButton = document.querySelector('#add-course-button');
const addSemesterButton = document.querySelector('#add-semester-button');
const calculateButton = document.querySelector('#calculate-button');
const resultParagraph = document.querySelector('#result');
const deleteAllDataBtn = document.querySelector('#clear-data-button');

let courseCount = 1;
let semesterCount = 1;

addCourseButton.addEventListener('click', () => {
  addCourse();
});


addSemesterButton.addEventListener('click', () => {
 addSemester();
});

deleteAllDataBtn.addEventListener('click', () => {
  clearLocalStorage();
  reload();
});

calculateButton.addEventListener('click', () => {
  let totalGrade = 0;
  let totalCredits = 0;
  console.log("The semester count is "+semesterCount);
  console.log("The course count is "+courseCount);
  for (let i = 1; i <= semesterCount; i++) {//increments the coure and grade id
    for (let j = 1; j <= courseCount; j++) {
      const courseName = document.querySelector(`#course-name-${i}-${j}`).value;    
      console.log(courseName);  
      const courseGrade = document.querySelector(`#course-grade-${i}-${j}`).value;
      if (courseName && courseGrade) {
        totalGrade += parseInt(courseGrade);
        totalCredits++;
      }

    }
  }
  const gpa = totalGrade / totalCredits;
  resultParagraph.textContent = `${gpa}`;

  // Save data to local storage
  const semesters = document.querySelectorAll('.semester');
  const data = [];
  semesters.forEach((semester) => {
    const courses = semester.querySelectorAll('.content-table tbody .course-row');
    const semesterData = {
      courses: []
    };
    courses.forEach((course) => {
      const courseNameInput = course.querySelector('.course-name input');
      const courseName = courseNameInput.value;
      const courseGradeInput = course.querySelector('.grade input');
      const courseGrade = courseGradeInput.value;
      semesterData.courses.push({
        courseName,
        courseGrade
      });
    });
    data.push(semesterData);
  });
  localStorage.setItem('data', JSON.stringify(data));
  localStorage.setItem('gpa', gpa);

});



function addRemoveCourseButtonListeners() {
  const removeCourseButtons = document.querySelectorAll('.remove-course-button');
  removeCourseButtons.forEach((button) => {
    button.addEventListener('click', (event) => {
      const courseRow = event.target.parentNode.parentNode;
      courseRow.remove();
      courseCount--;
    });
  });
}



//NEW ADD COURSE
let courseCounts = []; // array to hold course counts for each semester

function addCourse() {
  const currentSemester = document.querySelector('.semester:last-of-type');
  const currentTable = currentSemester.querySelector('table');
  const currentCourseCount = currentSemester.querySelectorAll('.course-row').length;
  const semesterIndex = Array.from(document.querySelectorAll('.semester')).indexOf(currentSemester);


  // initialize courseCount for this semester if it doesn't exist yet
  if (!courseCounts[semesterIndex]) {
    courseCounts[semesterIndex] = 0;
  }

 // if(semesterIndex == 0 && !courseCounts[semesterIndex] ){ //for the ONLY first semester i have to set the initial value as one
   // courseCounts[semesterIndex] = 1;
  //}

  if (currentCourseCount <= 6) {
    courseCounts[semesterIndex]++;
    const newCourseRow = document.createElement('tr');
    newCourseRow.classList.add('course-row');
    newCourseRow.innerHTML = `
      <td class="course-name"><input type="text" id="course-name-${semesterIndex + 1}-${courseCounts[semesterIndex]}" name="course-name-${semesterIndex + 1}-${courseCounts[semesterIndex]}"></td>
      <td class="grade"><input type="text" id="course-grade-${semesterIndex + 1}-${courseCounts[semesterIndex]}" name="course-grade-${semesterIndex + 1}-${courseCounts[semesterIndex]}"></td>
      <td><button type="button" class="remove-course-button">X</button></td>
    `;
    const tbody = currentTable.querySelector('tbody') || currentTable;
    tbody.appendChild(newCourseRow);
    addRemoveCourseButtonListeners();
  } else {
    alert('You cannot add more than 6 courses per semester');
  }
}










function addSemester() {
    semesterCount++;
    const newSemesterDiv = document.createElement('div');
    newSemesterDiv.classList.add('semester');
    newSemesterDiv.innerHTML = `
      <h2>Semester ${semesterCount}</h2>
      <button type="button" class="remove-semester-button">Remove Semester</button>
      <table class="content-table">
       <thead>
          <tr class="course-row">
            <th class="course-name">Course Name</th>
            <th class="grade">Grade</th>
            <th class="edit">Edit</th>
          </tr>
        </thead>
        <tbody>
        </tbody>
      </table>
    `;
    coursesDiv.appendChild(newSemesterDiv);
    addRemoveCourseButtonListeners();
    addRemoveSemesterButtonListeners();
  }


  function addRemoveSemesterButtonListeners() {
    const removeSemesterButtons = document.querySelectorAll('.remove-semester-button');
    removeSemesterButtons.forEach((button) => {
      button.addEventListener('click', (event) => {
        const semesters = document.querySelectorAll('.semester');
        const lastSemester = semesters[semesters.length - 1];
        lastSemester.remove();
        semesterCount--;
      });
    });
  }  


window.addEventListener('load', () => {
  const data = JSON.parse(localStorage.getItem('data'));
  if (data) {
    data.forEach((semesterData, semesterIndex) => {
      if (semesterIndex > 0) {
        addSemester();
      }
      semesterData.courses.forEach((courseData, courseIndex) => {
        if (courseData && courseData.courseName && courseData.courseGrade) {
          addCourse();
          const semester = document.querySelector(`.semester:nth-of-type(${semesterIndex + 1})`);
          const course = semester.querySelector(`tbody .course-row:nth-of-type(${courseIndex + 1})`);
          const courseNameInput = course.querySelector(`#course-name-${semesterIndex + 1}-${courseIndex + 1}`);
          const courseGradeInput = course.querySelector(`#course-grade-${semesterIndex + 1}-${courseIndex + 1}`);
          courseNameInput.value = courseData.courseName;
          courseGradeInput.value = courseData.courseGrade;
        }
      });
    });
  }


  const gpa = localStorage.getItem('gpa');
  document.querySelector('#result').textContent = gpa;

});


function clearLocalStorage() {
  const data = (localStorage.getItem('data') !== null);
  const gpa = (localStorage.getItem('data') !== null);

  if (data){
    localStorage.removeItem('data');
  }

  if (gpa){
    localStorage.removeItem('gpa');
  }

  location.reload();
}



function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}