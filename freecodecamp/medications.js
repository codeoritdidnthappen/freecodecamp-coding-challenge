/*
  https://www.freecodecamp.org/learn/daily-coding-challenge/2026-05-08
  Medication Reminder
  Given an array of medications and a string representing the current time, return the next medication you need to take and how long until you need to take it.

  Each medication is in the format [name, lastTaken], where name is the name of the medication and lastTaken is the time it was last taken.
  All given times will be in "HH:MM" (24-hour) format.
  Use the following medication schedule:

  Name	Schedule
  Deployxitrin	08:00, 16:00
  Debuggamanizole	07:00, 13:00, 21:00
  Mergeflictamine	every 4 hours

*/


// const setMedicationDate = (medTime, currentTime) => {
//   return currentTime > medTime ? 
// }

const schedule = [ ["8:00", "16:00" ], ["7:00", "13:00", "21:00" ] ]

const convertMsToTime = (milliseconds) => {
  let seconds = Math.floor(milliseconds / 1000)
  let minutes = Math.floor(seconds / 60)
  let hours = Math.floor(minutes / 60)

  seconds = seconds % 60
  minutes = minutes % 60

  // 👇️ If you don't want to roll hours over, e.g. 24 to 00
  // 👇️ comment (or remove) the line below
  // commenting next line gets you `24:00:00` instead of `00:00:00`
  // or `36:15:31` instead of `12:15:31`, etc.
  hours = hours % 24

  const padTo2Digits = (num) => num.toString().padStart(2, '0')

  return `${padTo2Digits(hours)}:${padTo2Digits(minutes)}}`
}

const setMedicationTime = (medSchedule, currentTime) => {
  let today = false
  for (let i = 0, len = medSchedule.length; i < len; i++) {
    const medMinutes = parseInt(medSchedule[i].split(":")[0] * 60 + medSchedule[i].split(":")[1])
    const currentMinutes = parseInt(currentTime.split(":")[0] * 60 + currentTime.split(":")[1])
    if (medMinutes > currentMinutes) {
      return new Date(`2026-05-11T${medSchedule[i].padStart(5, "0")}:00`)
    }
  }
  // If all times are before current time
  if (!today) {
    return new Date(`2026-05-12T${medSchedule[0].padStart(5, "0")}:00`)
  }
}

const setNextMergeflictamine = (lastTaken, currentTime) => {
  let mergeflictamine = lastTaken.split(":")
  do {
    mergeflictamine[0] = (parseInt(mergeflictamine[0]) + 4)
  } while (mergeflictamine[0] < currentTime.split(":")[0])
  return new Date(`2026-05-11T${mergeflictamine.join(":").padStart(5, "0")}:00`)
}

function medicationReminder(medications, currentTime) {
  const isoDate = new Date(`2026-05-11T${currentTime}:00`)
  
  const nextDeployxitrin = setMedicationTime(schedule[0], currentTime) - isoDate

  const nextDebuggamanizole = setMedicationTime(schedule[1], currentTime) - isoDate

  const nextMergeflictamine = setNextMergeflictamine(medications[2][1], currentTime) - isoDate

  // console.log(nextDeployxitrin, nextDebuggamanizole, nextMergeflictamine)

  const nextMedication = Math.min(
    nextDeployxitrin,
    nextDebuggamanizole,
    nextMergeflictamine
  )

  if (nextMedication === nextDeployxitrin) {
    return `Deployxitrin in ${Math.floor(nextDeployxitrin / 1000 / 60 / 60)}h ${(nextDeployxitrin % 3600000) / 1000 / 60}m`
  }
  if (nextMedication === nextDebuggamanizole) {
    return `Debuggamanizole in ${Math.floor(nextDebuggamanizole / 1000 / 60 / 60)}h ${(nextDebuggamanizole % 3600000) / 1000 / 60}m`
  }
  if (nextMedication === nextMergeflictamine) {
    return `Mergeflictamine in ${Math.floor(nextMergeflictamine / 1000 / 60 / 60)}h ${(nextMergeflictamine % 3600000) / 1000 / 60}m`
  }
}

// Tests
console.log(medicationReminder([["Deployxitrin", "08:00"], ["Debuggamanizole", "07:00"], ["Mergeflictamine", "10:00"]], "11:00"))
console.log(medicationReminder([["Deployxitrin", "08:00"], ["Debuggamanizole", "13:00"], ["Mergeflictamine", "14:00"]], "14:55"))
console.log(medicationReminder([["Deployxitrin", "08:00"], ["Debuggamanizole", "13:00"], ["Mergeflictamine", "14:00"]], "17:15"))
console.log(medicationReminder([["Deployxitrin", "08:00"], ["Debuggamanizole", "07:00"], ["Mergeflictamine", "09:00"]], "12:59"))
console.log(medicationReminder([["Deployxitrin", "08:00"], ["Debuggamanizole", "21:00"], ["Mergeflictamine", "03:00"]], "06:55"))
console.log(medicationReminder([["Deployxitrin", "08:00"], ["Debuggamanizole", "07:00"], ["Mergeflictamine", "07:30"]], "08:00"))