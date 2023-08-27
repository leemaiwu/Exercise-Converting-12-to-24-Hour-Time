const to24hourtime = (hour, minute, period) => {
  if (period === 'am') {
    return (hour == 12 ) && (minute + '').length == 1 ? `000${minute}` :
    (hour == 12 ) && (minute + '').length == 2 ? `00${minute}` :
    (hour + '').length == 1 && (minute + '').length == 1 ? `0${hour}0${minute}` :
    (hour + '').length == 2 && (minute + '').length == 1 ? `${hour}0${minute}` :
    (hour + '').length == 1 && (minute + '').length == 2 ? `0${hour}${minute}` :
    `${hour}${minute}`
  }
  else if (period === 'pm') {
    return (hour == 12 ) && (minute + '').length == 1 ? `${hour}0${minute}` :
    (hour == 12 ) && (minute + '').length == 2 ? `${hour}${minute}` :
    (hour + '').length == 1 && (minute + '').length == 1 ? `${hour + 12}0${minute}` :
    (hour + '').length == 1 && (minute + '').length == 2 ? `${hour + 12}${minute}` :
    (hour + '').length == 2 && (minute + '').length == 1 ? `${hour + 12}0${minute}` :
    `${hour + 12}${minute}`
  }
}

console.log(to24hourtime(1,  0, "am")) // 0100
console.log(to24hourtime(1,  0, "pm")) // 1300
console.log(to24hourtime(12,  0, "am")) // 0000
console.log(to24hourtime(12,  0, "pm")) // 1200
console.log(to24hourtime(9, 45, "pm")) // 2145
console.log(to24hourtime(11, 0, "pm")) // 2300
console.log(to24hourtime(10, 54, "pm")) // 2254

