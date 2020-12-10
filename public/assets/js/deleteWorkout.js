document.addEventListener('click', event => {
  if (event.target.classList.contains('deleteWorkout')) {
    let workouts = getWorkouts()
    let index = 0
    let id = event.target.dataset.id
    let len = workouts.length
    for (let i = 0; i < len; i++) {
      if (workouts[i].id === id) {
        index = i
        i = len
      }
    }

    workouts.splice(index, 1)
    localStorage.setItem('fitness_edge_custom_workouts', JSON.stringify(workouts))

    let list = workouts.map(({ id, title, muscle, sets, reps, weight, description }) => {
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

      htmlText += `
    <button type="button" class="deleteWorkout" data-id="${id}">Delete</button>
  </li>`

      return htmlText
    })

    document.getElementById('customWorkouts').innerHTML = list.join('')

    // axios.delete(`/api/workouts/${event.target.dataset.id}`)
    //   .then(() => { location.reload() })
    //   .catch(err => console.log(err))
  }
})