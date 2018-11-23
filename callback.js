// const func = function () {
//   Date.
// }
// 
// setInterval(func,1000)



class Clock {
  constructor() {
    // 1. Create a Date object.
    // 2. Store the hours, minutes, and seconds.
      const date = new Date();
      this.hours = date.getHours();
      this.minutes = date.getMinutes();
      this.seconds = date.getSeconds();
      this.printTime();
      setInterval(this._tick.bind(this), 1000);
    // 3. Call printTime.
    // 4. Schedule the tick at 1 second intervals.  
  }

  printTime() {
    // Format the time in HH:MM:SS
    // Use console.log to print it.
    let time = `${this.hours}:${this.minutes}:${this.seconds}`;
    console.log(time);
  }

  _tick() {
    this.seconds += 1;
    if(this.seconds === 60){
      this.seconds = 0;
      this.minutes += 1;
    }
    if(this.minutes === 60){
      this.minutes =0;
      this.hours += 1;
    }
    if(this.hours === 24){
      this.hours = 0;
    }
    this.printTime();
    
    // 1. Increment the time by one second.
    // 2. Call printTime.
  }
}

const clock = new Clock();
// console.log(clock);
