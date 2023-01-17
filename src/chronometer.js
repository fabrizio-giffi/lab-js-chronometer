class Chronometer {
  constructor() {
    this.currentTime = 0
    this.intervalId = null
  }

  start(printTimeCallback) {
    this.intervalId = setInterval (() => {
      this.currentTime += 1
      if (printTimeCallback) printTimeCallback()
    }, 1000)
  }

  getMinutes() {
    return Math.floor(this.currentTime / 60)
  }

  getSeconds() {
    if (this.currentTime === 0) return 0;
    return this.currentTime % 60
  }

  computeTwoDigitNumber(value) {
    return ("0" + value).slice(-2)

    // SAME RESULT WITH A DIFFERENT METHOD
    // return (value).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false})
  }

  stop() {
    clearInterval(this.intervalId)
  }

  reset() {
    this.currentTime = 0
  }

  split() {
    const minSplit = this.computeTwoDigitNumber(this.getMinutes())
    const secSplit = this.computeTwoDigitNumber(this.getSeconds())
    return `${minSplit}:${secSplit}`
  }
}
