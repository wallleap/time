const units = 'year month day hour minute second ms millisecond'.split(' ')
export class Time {
  constructor(param, month, ...rest) {
    if (arguments.length === 0) {
      this.date = new Date()
    } else if (arguments.length === 1) {
      this.date = new Date(param)
    } else {
      this.date = new Date(param, month - 1, ...rest)
    }
  }
  clone() {
    return new Time(this.date)
  }
  now(value) {
    if (arguments.length === 0) {
      return this.date.getTime()
    } else {
      if (value) {
        this.date.setTime(value)
      }
      return this
    }
  }
  year(value) {
    if (arguments.length === 0) {
      return this.date.getFullYear()
    } else {
      this.date.setFullYear(value)
      return this
    }
  }
  month(value) {
    if (arguments.length === 0) {
      return (this.date.getMonth() + 1)
    } else {
      this.date.setMonth(value - 1)
      return this
    }
  }
  day(value) {
    if (arguments.length === 0) {
      return this.date.getDate()
    } else {
      this.date.setDate(value)
      return this
    }
  }
  week() {
    try {
      if (arguments.length === 0) {
        return this.date.getDay()
      } else {
        throw new Error("不支持设置星期")
      }
    } catch (error) {
      console.error(error)
    }
  }
  hour(value) {
    if (arguments.length === 0) {
      return this.date.getHours()
    } else {
      this.date.setHours(value)
      return this
    }
  }
  minute(value) {
    if (arguments.length === 0) {
      return this.date.getMinutes()
    } else {
      this.date.setMinutes(value)
      return this
    }
  }
  second(value) {
    if (arguments.length === 0) {
      return this.date.getSeconds()
    } else {
      this.date.setSeconds(value)
      return this
    }
  }
  millisecond(value) {
    if (arguments.length === 0) {
      return this.date.getMilliseconds()
    } else {
      this.date.setMilliseconds(value)
      return this
    }
  }
  ms(value) {
    if (arguments.length === 0) {
      return this.date.getMilliseconds()
    } else {
      this.date.setMilliseconds(value)
      return this
    }
  }
  add(num, unit) {
    const copy = this.clone()
    try {
      if (arguments.length !== 2) {
        throw new Error("add 只接收两个参数")
      } else {
        if (unit.endsWith('s')) {
          unit = unit.slice(0, -1)
        }
        if (units.includes(unit)) {
          copy[unit](copy[unit]() + num)
        } else {
          throw new Error("add 第二个参数不正确")
        }
      }
    } catch (error) {
      console.error(error)
    }
    return copy
  }
  sub(num, unit) {
    const copy = this.clone()
    return copy.add(-1 * num, unit)
  }
  format(str) {
    if (arguments.length === 0) {
      return this.year() + '/' + this.month().toString().padStart(2, '0') + '/' + this.day().toString().padStart(2, '0') + ' ' + this.hour().toString().padStart(2, '0') + ':' + this.minute().toString().padStart(2, '0') + ':' + this.second().toString().padStart(2, '0')
    }
    return str
      .replace(/yyyy/g, this.year())
      .replace(/MM/g, this.month().toString().padStart(2, '0'))
      .replace(/dd/g, this.day().toString().padStart(2, '0'))
      .replace(/HH/g, this.hour().toString().padStart(2, '0'))
      .replace(/mm/g, this.minute().toString().padStart(2, '0'))
      .replace(/ss/g, this.second().toString().padStart(2, '0'))
  }
  lastDayOfMonth() {
    const copy = this.clone()
    return copy.add(1, 'month').day(0).day()
  }
  isLeapYear() {
    const copy = this.clone()
    return copy.month(2).lastDayOfMonth() === 29 ? true : false
  }
}

export const time = (...params) => {
  return new Time(...params)
}
