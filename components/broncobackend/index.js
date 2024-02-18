//main function
//read from user funciton
var listOfTasks = []; // stores our objects/tasks in a list
var userAvailiableTimes = new Array(7).fill().map((i) => new Array(20).fill(0)); //2d array to have each row from monday to sunday
var schedule = new Array(7).fill().map((i) => new Array(20).fill("Busy")); // stores objects
var today = 1; //single value for calc

// Monday = 1, Tuesday = 2, Wednesday = 3, Thursday = 4, Friday = 5, Saturday  = 6, Sunday = 7
class Task {
  //blue print of tasks
  constructor(name, dueDate, assignmentType, timeNeeded) {
    //builds objects w inputs
    //our elements
    this.name = name;
    this.dueDate = dueDate;
    this.assignmentType = assignmentType;
    this.timeNeeded = timeNeeded;
  }
}

function readFromUser( name, userDueDate, assignmentType, timeNeeded, taskNumber,) {
  let dueDate;
  //converting day of the weak value to this
  switch (
    userDueDate //may work with case lower
  ) {
    case "Monday":
      dueDate = 1;
      break;
    case "Tuesday":
      dueDate = 2;
      break;
    case "Wednesday":
      dueDate = 3;
      break;
    case "Thursday":
      dueDate = 4;
      break;
    case "Friday":
      dueDate = 5;
      break;
    case "Saturday":
      dueDate = 6;
      break;
    case "Sunday":
      dueDate = 7;
      break;
  }
  var task; //task object to fill it with new tasks
  task = new Task(name, dueDate, assignmentType, timeNeeded); //create a new copy of Task
  task.importance = task.assignmentType * (1 / (task.dueDate - today + 0.01)); //assigning importance based on user input
  listOfTasks[taskNumber] = task; //adding new item to list
  return;
}

//reads when they are free and what they want to get done
function determineUserFreeTime(day, tod) {
  //1 means free, 0 means busy
  userAvailiableTimes[day][tod] = 1;
  return;
}

function addTasksToDays() {
  let objectPointer = 0; //moves us throuhgh tasks
  let counter; //time in a task remaining to be added during the adding process of that task
  let timeRemainingInDay = 0; //time left within a day
  let numOfTaskInDay = 0;

  for (let i = 0; i < 7; i++) {
    //counting time in day
    timeRemainingInDay = 0;
    numOfTaskInDay = 0;
    for (let j = 0; j < 20; j++) {
      //counting times in hours within days
      console.log("userAvailiableTimes: ", userAvailiableTimes[i][j]);
      if (userAvailiableTimes[i][j] === 1) {
        timeRemainingInDay++;
        console.log("TimeAvailibleIs==", timeRemainingInDay);
      }
    }
    counter = listOfTasks[objectPointer].timeNeeded;
    for (let k = 0; k < 20; k++) {
      if (timeRemainingInDay === 0) {
        //console.log("timeRemainingInDay==0");
        break;
      }
      if (timeRemainingInDay < counter) {
        //console.log("timeRemainingInDay>counter");
        break;
      }
      if (counter === 0) {
        objectPointer++;
        numOfTaskInDay++;
        counter = listOfTasks[objectPointer].timeNeeded;
      }
      if (numOfTaskInDay >= 4){
        break;
      }
      if (userAvailiableTimes[i][k] === 1) {
        //
        //console.log("userAvail==1", objectPointer, listOfTasks[objectPointer]);
        schedule[i][k] = listOfTasks[objectPointer].name;
        counter--;
        timeRemainingInDay--;
      }
    }
  }
  return;
}

function priority() {
  //lets variable
  //nested for loop
  //bubble and sort to find highest priority i.e largest number to smallest
  for (let i = 0; i < 7; i++) {
    for (let j = 0; j < 20 - i; j++) {
      if (arr[j] < arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return;
}
function displayData() {
  
  
}

function printAll() {
  console.table(schedule);
  return;
}

//assign tasks for each day function
//assign tasks for each time slot in the day function
//allow user to move task around to different days
//recall the assign time slot for each day function
//repeat last two steps until user is satisfied with the schedule
//give final schedule (optional)

readFromUser("mathhw", "Wednesday", 1, 3, 0);
readFromUser("ENGLISH", "Wednesday", 1, 2, 1);
readFromUser("TTQuiz", "Sunday", 2, 4, 2);
readFromUser("ECEN20Essay", "Thursday", 3, 3, 3);
readFromUser("StudyJapanese", "Sunday", 1, 5, 4);
readFromUser("ECEN21Quiz", "Tuesday", 2, 1, 5);
determineUserFreeTime(1, 2);
determineUserFreeTime(1, 3);
determineUserFreeTime(1, 4);
determineUserFreeTime(1, 10);
determineUserFreeTime(1, 12);
addTasksToDays();
printAll();