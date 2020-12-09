let regime = JSON.parse(localStorage.getItem('fitness_edge_weekly_regime'))
console.log(regime)
if (!regime) {
  regime = [
    [
      {
        title: "Test",
        muscle: "Test",
        sets: 0,
        reps: "Test",
        weight: 0,
        description: "Test"
      }
    ],
    [
      {
        title: "Test",
        muscle: "Test",
        sets: 0,
        reps: "Test",
        weight: 0,
        description: "Test"
      }
    ],
    [
      {
        title: "Test",
        muscle: "Test",
        sets: 0,
        reps: "Test",
        weight: 0,
        description: "Test"
      }
    ],
    [
      {
        title: "Test",
        muscle: "Test",
        sets: 0,
        reps: "Test",
        weight: 0,
        description: "Test"
      }
    ],
    [
      {
        title: "Test",
        muscle: "Test",
        sets: 0,
        reps: "Test",
        weight: 0,
        description: "Test"
      }
    ],
    [
      {
        title: "Test",
        muscle: "Test",
        sets: 0,
        reps: "Test",
        weight: 0,
        description: "Test"
      }
    ],
    [
      {
        title: "Test",
        muscle: "Test",
        sets: 0,
        reps: "Test",
        weight: 0,
        description: "Test"
      }
    ]
  ]

  localStorage.setItem('fitness_edge_weekly_regime', JSON.stringify(regime))
}

weekdays = ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"]

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