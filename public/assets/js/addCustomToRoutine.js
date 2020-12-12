const validateWorkout = ({ title, muscle, sets, reps, weight }) => {
  if (title === '') {
    return false
  }
  if (muscle === '') {
    return false
  }
  if (isNaN(parseInt(sets))) {
    return false
  }
  if (reps === '') {
    return false
  }
  if (weight) {
    if (isNaN(parseInt(weight))) {
      return false
    }
  }
  return true
}

document.getElementById("weight").addEventListener("input", (event) => {
  let target = event.target
  target.value = target.value.replace(/[^0-9.]/g, '')
})

document.getElementById("sets").addEventListener("input", (event) => {
  let target = event.target
  target.value = target.value.replace(/[^0-9.]/g, '')
})

document.getElementById('addCustomToRoutine').addEventListener('click', event => {
  event.preventDefault()
  let workout = {
    title: document.getElementById('title').value,
    muscle: document.getElementById('muscle').value,
    sets: document.getElementById('sets').value,
    reps: document.getElementById('reps').value,
    weight: (document.getElementById('weight').value) ? document.getElementById('weight').value : null,
    description: (document.getElementById('description').value) ? document.getElementById('description').value : null
  }

  if (validateWorkout(workout)) {
    let day = document.getElementById('modal').dataset.day
    let index = parseInt(document.getElementById('modal').dataset.index)
    let routines = getRoutines()
    if (index < 0) {
      routines[day].push(workout)
    } else {
      routines[day][index] = workout
    }
    setRoutines(routines)
    document.getElementById('title').value = ''
    document.getElementById('muscle').value = ''
    document.getElementById('sets').value = ''
    document.getElementById('reps').value = ''
    document.getElementById('weight').value = ''
    document.getElementById('description').value = ''
    document.getElementById('warning').textContent = ''

    location.reload()

  } else {
    document.getElementById('warning').textContent = "Required inputs must be filled correctly."
  }
})