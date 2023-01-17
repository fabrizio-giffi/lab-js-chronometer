class Chronometer {
  constructor() {
    this.currentTime = 0
    this.intervalId = null
    this.centiseconds = 0
    this.centId = null
  }

  start(printTimeCallback) {
    this.intervalId = setInterval (() => {
      this.currentTime += 1
      if (printTimeCallback) printTimeCallback()
    }, 1000)
    this.centId = setInterval (() => {
      this.centiseconds += 1
      if (printTimeCallback) printTimeCallback()
    }, 10)
  }

  getMinutes() {
    return Math.floor(this.currentTime / 60)
  }

  getSeconds() {
    if (this.currentTime === 0) return 0;
    return this.currentTime % 60
  }


  getCentiseconds() {
    if (this.centiseconds === 0) return 0;
    return this.centiseconds % 100
  }

  computeTwoDigitNumber(value) {
    return ("0" + value).slice(-2)
  }

  stop() {
    clearInterval(this.intervalId)
    clearInterval(this.centId)
  }

  reset() {
    this.currentTime = 0
    this.centiseconds = 0
  }

  split() {
    const minSplit = this.computeTwoDigitNumber(this.getMinutes())
    const secSplit = this.computeTwoDigitNumber(this.getSeconds())
    const centSplit = this.computeTwoDigitNumber(this.getCentiseconds())
    return `${minSplit}:${secSplit}:${centSplit}`
  }
}
