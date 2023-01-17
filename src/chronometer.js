class Chronometer {
  constructor() {
    this.currentTime = 0
    this.intervalId = null

    // // Uncomment for bonus section 1/6
    // this.centiseconds = 0
    // this.centId = null
  }

  start(printTimeCallback) {
    this.intervalId = setInterval (() => {
      this.currentTime += 1
      if (printTimeCallback) printTimeCallback()
    }, 1000)

    // // Uncomment for bonus section 2/6
    // this.centId = setInterval (() => {
    //   this.centiseconds += 1
    //   if (printTimeCallback) printTimeCallback()
    // }, 10)
  }

  getMinutes() {
    return Math.floor(this.currentTime / 60)
  }

  getSeconds() {
    if (this.currentTime === 0) return 0;
    return this.currentTime % 60
  }

  // // Uncomment for bonus section 3/6
  // getCentiseconds() {
  //   if (this.centiseconds === 0) return 0;
  //   return this.centiseconds % 100
  // }

  computeTwoDigitNumber(value) {
    return ("0" + value).slice(-2)

    // SAME RESULT WITH A DIFFERENT METHOD
    // return (value).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false})
  }

  stop() {
    clearInterval(this.intervalId)

    // // Uncomment for bonus section 4/6
    // clearInterval(this.centId)
  }

  reset() {
    this.currentTime = 0

    // // Uncomment for bonus section 5/6
    // this.centiseconds = 0
  }

  split() {
    // // Uncomment for bonus section 6/6
    // const centSplit = this.computeTwoDigitNumber(this.getCentiseconds())
    // return `${minSplit}:${secSplit}:${centSplit}`

    const minSplit = this.computeTwoDigitNumber(this.getMinutes())
    const secSplit = this.computeTwoDigitNumber(this.getSeconds())
    return `${minSplit}:${secSplit}`
  }
}
