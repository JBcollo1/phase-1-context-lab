/* Your Code Here */

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */
function createEmployeeRecord(array){
   return{
    firstName: array[0],
    familyName: array[1],
    title: array[2],
    payPerHour: array[3],

    timeInEvents: [],
    timeOutEvents:[]
   }
}
   function createEmployeeRecords(array){
    return array.map(createEmployeeRecord)
        
   }
   function createTimeInEvent(dates) {
    const [date, hour] = dates.split(' ');
    const timeInEvent = {
      type: 'TimeIn',
      hour: parseInt(hour),
      date,
    };
    this.timeInEvents.push(timeInEvent);
    return this;
  }
   
  function createTimeOutEvent(dates) {
    const [date, hour] = dates.split(' ');
    const timeOutEvent = {
      type: 'TimeOut',
      hour: parseInt(hour),
      date,
    };
    this.timeOutEvents.push(timeOutEvent);
    return this;
  }
  function hoursWorkedOnDate(date){
    const timeInEvent = this.timeInEvents.find((event) => event.date === date);
    const timeOutEvent = this.timeOutEvents.find((event) => event.date === date);
  
    if (timeInEvent && timeOutEvent) {
      const timeIn = timeInEvent.hour;
      const timeOut = timeOutEvent.hour;
      const hoursWorked = (timeOut - timeIn) / 100;
      return hoursWorked;
    }
  }
  function wagesEarnedOnDate(date) {
    const hoursWorked = hoursWorkedOnDate.call(this, date);
    const amountOwed = hoursWorked * this.payPerHour;
    return amountOwed;
  }
  
  function findEmployeeByFirstName(collection, firstNameString){
    const test = collection.find(function(employee){
      return employee.firstName === firstNameString
    })
    return test
  }
  
  function calculatePayroll(employeeRecords) {
    let totalPayroll = 0;
  
    employeeRecords.forEach((employee) => {
      totalPayroll += allWagesFor.call(employee);
    });
  
    return totalPayroll;
  }

const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}

