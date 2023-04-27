# time

JS Date based library

基于 JavaScript `Date` 封装的时间库，它提供了一系列方便的方法，使得操作日期和时间变得更加容易

🎈 优化了一些 `Date` 难用的语法或参数，例如月份需要加减一等
✨ 实现了一些常用的功能，例如格式化时间、比较时间、加减年月日、判断闰年等

## Installation 安装

你可以通过 `npm` 或者 `yarn` 安装

```js
npm install <> --save
```

或者

```js
yarn add <>
```

导入

```js
import { Time } from 'time.js'
```

当然，你也可以直接下载源码，并在你的项目中引入：

```js
<script src="path/to/time.min.js"></script>
```

## Usage 使用

`time.js` 使用非常简单，你只需要在你的 JavaScript 代码中引入它，并且创建一个 Time 实例即可：

```js
const t1 = new Time()
console.log(t1.year())
```

## API 文档

### Time([params])

创建一个 Time 实例，如果不传入任何参数，则使用当前时间。如果传入了参数，则解析参数并创建一个 Time 实例。

```js
const t1 = new Time()  // 当前时间
console.log(t1.format())
const t3 = new Time(2024, 1) // 2024 年 1 月
console.log(t3.format())
```

参数可以为
- 时间戳
  - 一个整数值，表示自 1970 年 1 月 1 日 00:00:00 UTC（the Unix epoch）以来的毫秒数
  - 例如 `1682574194308`
- 日期字符串
  - 符合 [IETF-compliant RFC 2822 timestamps](https://tools.ietf.org/html/rfc2822#page-14) 或 [version of ISO8601](https://www.ecma-international.org/ecma-262/5.1/#sec-15.9.1.15)
  - 例如 `Thu Apr 27 2023 13:43:14 GMT+0800`、`2023-04-27T13:43:14.333Z`
- 年月日等以参数传递（年月必传）
  - `yearValue, monthValue [, dayValue [, hourValue [, minuteValue [, secondValue [, msValue]]]]]`
  - `yearValue` 表示年份的整数值，请使用完整的三位或四位数值（例如 600、1990），如果需要表示两位数的请不要使用此方法，可使用 `new Time('0060-01')` 表示）
  - `monthValue` 表示月份的整数值，从 `1` 到 `12` 表示一月到十二月（可以超出，将会自动进位，下同）
  - `dayValue` 表示一个月中的第几天的整数值，从 `1` 开始（可以设置为 0，代表上个月的最后一天；也可以设置负数）
  - `hourValue` 表示一天中的小时数的整数值，`0` 到 `23`
  - `minuteValue` 表示分钟的整数值，`0` 到 `59`
  - `secondValue` 表示秒的整数值，`0` 到 `59`
  - `msValue` 表示毫秒的整数值，`0` 到 `999`

> 说明：`[]` 为可选参数

### Getter & Setter

设置的时候支持链式调用，例如：

```js
year(2024).month(12).day(3).hour(0).minute(4).second(56).millisecond(333).now()  // 1733155496333
```

**时间戳**

返回一个时间的格林威治时间数值，从 1970-1-1 00:00:00 UTC 计时的毫秒数

```js
t.now([timevalue])
```

例如

```js
t1.now()
t1.now(1682574194308)
```

**年**

```js
t.year([yearValue,[, monthValue[, dayValue]]])
```

使用：

```js
t1.year(1997) // 设置年份
t1.year()  // 获取年份 1997
```

**月**

```js
t.month([monthValue[, dayValue]])
```

**日**

```js
t.day([dayValue])
```

**星期**

```js
t.week()
```

只能获取星期，不能设置，返回值为 `0`（周日） 到 `6`（周六）

**小时**

```js
t.hour([hourValue[, minuteValue[, secondValue[, msValue]]]])
```

**分钟**

```js
t.minute(minuteValue[, secondValue[, msValue]])
```

**秒**

```js
t.second([secondValue[, msValue]])
```

**毫秒**

```js
t.ms([msValue])
t.millisecond([msValue])
```

提供了更简短的 `ms()` 写法，同时为了配合部分喜欢完整英语的用户习惯，还提供了 `millisecond()`

## add && sub

```js
t.add(num, unit)
t.sub(num, unit)
```

参数：
- 第一个参数为一个数字
- 第二个参数为单位，可以为 `'year', 'month', 'day', 'hour', 'minute', 'second', 'ms', 'millisecond'`，或者复数形式，如 `'years'` 

支持链式调用，例如：

```js
const t4 = t1.add(10, 'years').add(1, 'month').sub(3, 'day')
console.log(t4.format())
```

### Formatter 格式化
