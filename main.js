import { Time, time } from './time.js'

window.Time = Time
window.time = time
window.t = new Time()
const t1 = new Time('1004-01-17T11:20:40.000Z')

const t3 = t1.add(0, 'years').add(9, 'month').add(60, 'seconds')

document.querySelector('#app').innerHTML = `
  <div>
    <p>时间 ${JSON.stringify(t3.isLeapYear())} ${t3.format()}</p>
    <p>时间 ${JSON.stringify(t1.now(-1)) } ${t1.now(1111111111111111).year()}</p>
  </div>
`

