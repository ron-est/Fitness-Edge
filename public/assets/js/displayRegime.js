let weekdays = ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"]

const displayRegimeInit = () => {

  let regime = getRegime()
  let workouts = getWorkouts()
  regime.forEach((workouts, i) => {
    let list = workouts.map(({ title, muscle, sets, reps, weight, description }) => {
      let htmlText = `
      <li>
      <p>Title: ${title}</p>
      <p>Muscle: ${muscle}</p>
      <p>Sets: ${sets}</p>
      <p>Reps: ${reps}</p>
      `

      if (weight) {
        htmlText += `<p>Weight: ${weight}</p>`
      }
      if (description) {
        htmlText += `
        <label>Description:</label> 
        <p>${description}</p>`
      }
      htmlText += '</li>'

      return htmlText
    })

    document.getElementById(weekdays[i]).innerHTML = list.join('')
  })
}

displayRegimeInit()

// axios.get('/api/workouts')
//   .then(({ data }) => {
//     console.log(data)
//     let workouts = data.map(({ title, muscle, sets, reps, weight, description }) => {
//       let htmlText = `
//       <li>
//       <p>Title: ${title}</p>
//       <p>Muscle: ${muscle}</p>
//       <p>Sets: ${sets}</p>
//       <p>Reps: ${reps}</p>
//       `

//       if (weight) {
//         htmlText += `<p>Weight: ${weight}</p>`
//       }
//       if (description) {
//         htmlText += `
//         <label>Description:</label> 
//         <p>${description}</p>`
//       }
//       htmlText += '</li>'

//       return htmlText
//     })

//     document.getElementById('workoutList').innerHTML = workouts.join('')
//   })
//   .catch(err => console.error(err))