const randInt = (max) => {
  return Math.floor(Math.random() * max)
}

const onAppInit = () => {
  let htmlText = document.getElementById("premadeTable").innerHTML
  let columns = ["Legs", "Chest", "Shoulders", "Back", "Biceps", "Triceps", "Core"]

  let rows = []
  let len = columns.length
  for (let i = 0; i < len; i++) {
    rows.push(randInt(10))
    console.log(rows[i])
  }

  for (let i = 0; i < 10; i++) {
    htmlText += '<tr>'
    for (let j = 0; j < len; j++) {
      if (rows[j] > i) {
        htmlText += `<td class="premadeWorkout z-depth-2 hoverable" data_id="">${columns[j]}_${i}</td>`
      } else {
        htmlText += `<td class="z-depth-2"></td>`
      }
    }
    htmlText += '</tr>'
  }
  document.getElementById("premadeTable").innerHTML = htmlText
}

onAppInit()