const displayRoutineInit = () => {

  let weekdays = ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"]
  let routines = getRoutines()
  weekdays.forEach(day => {
    let htmlText = ''
    let routine = routines[day]
    routine.forEach(({ title, muscle, sets, reps, weight, description }, i) => {
      htmlText += `
          <div class="card hoverable wrkotCard"">
            <h6 class="truncate wrkotTitle ">
                <a class="halfway-fab waves-effect waves-light modal-trigger" href="#modal">
                  <i class="material-icons editWorkout" data-day="${day}" data-index="${i}">fitness_center</i>
                </a>
                ${title}
            </h6>
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
      htmlText += '</div>'
    })
    document.getElementById(`${day}Routine`).innerHTML = htmlText
  })

}

displayRoutineInit()