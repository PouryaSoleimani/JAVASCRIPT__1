const date = new Date() // Tue Apr 14 2026 22:42:30 GMT+0330 (Iran Standard Time) 

const _date = date.getDate() // 14

const day = date.getDay() // 2 == Tue

const month = date.getMonth() // 3 == Apr

const hours = date.getHours() // 2

const offset = date.getTimezoneOffset() // -210

const utcDate = date.getUTCDate() // 14

const fullYear = date.getUTCFullYear() // 2026

const isoString = date.toISOString() // 2026-04-14T19:15:42.731Z

const dateString = date.toDateString() // Tue Apr 14 2026

const localeDateString = date.toLocaleDateString() // 4/14/2026

const timeString = date.toTimeString() // 22:48:43 GMT+0330 (Iran Standard Time)

const valueOf = date.valueOf() // 1776194389671



