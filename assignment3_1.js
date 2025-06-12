// 1. Initialize an array with the given student marks
let marks = [85, 62, 90, 78, 88, 95, 70, 60, 100, 82];

// 2. Display the original array
console.log("Original Marks Array:", marks);

// 3. Find and display the:
//Total number of students
console.log("Total Number of Students:", marks.length);
//highest marks and lowest marks 
let max = marks[0];
let min = marks[0];

for (let i = 1; i < marks.length; i++) {
  if (marks[i] > max) {
    max = marks[i];
  }
  if (marks[i] < min) {
    min = marks[i];
  }
}

console.log("Maximum Mark:", max);
console.log("Minimum Mark:", min);

//Average mark (rounded to 2 decimal places)
let total = 0;
for (let i = 0; i < marks.length; i++) {
  total = total + marks[i];
}
let average = total / marks.length;
average = average.toFixed(2);
console.log("Average Mark:", average);


// 4. Sort the array
// Ascending order
for (let i = 0; i < marks.length - 1; i++) {
  for (let j = 0; j < marks.length - 1 - i; j++) {
    if (marks[j] > marks[j + 1]) {
      let temp = marks[j];
      marks[j] = marks[j + 1];
      marks[j + 1] = temp;
    }
  }
}
console.log("Ascending Order:", marks);


// Descending order
for (let i = 0; i < marks.length - 1; i++) {
  for (let j = 0; j < marks.length - 1 - i; j++) {
    if (marks[j] < marks[j + 1]) {
      let temp = marks[j];
      marks[j] = marks[j + 1];
      marks[j + 1] = temp;
    }
  }
}
console.log("Descending Order:", marks);


// 5. Add a new mark (76) at the end and beginning
marks.push(76);      
marks.unshift(76);  
console.log("Array after adding 76 at beginning and end:", marks);

// 6. Remove the first and last mark
marks.shift(); 
marks.pop();    
console.log("Array after removing first and last marks:", marks);

// 7. Check if mark 90 exists
let check = marks.includes(90);
console.log("Does mark 90 exist in the array?", check);