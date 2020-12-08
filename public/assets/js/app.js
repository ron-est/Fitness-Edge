const validateAddWorkout = ({ title, muscle, sets, reps, weight }) => {
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

document.addEventListener('click', event => {
  event.preventDefault()
  if (event.target.classList.contains('addWorkout')) {
    let workout = {
      title: document.getElementById('title').value,
      muscle: document.getElementById('muscle').value,
      sets: document.getElementById('sets').value,
      reps: document.getElementById('reps').value,
      weight: (document.getElementById('weight').value) ? document.getElementById('weight').value : null,
      description: (document.getElementById('description').value) ? document.getElementById('description').value : null
    }

    if (validateAddWorkout(workout)) {
      axios.post('/api/workouts', workout)
        .then(() => { location.reload })
        .catch(err => { console.log() })
    } else {
      document.getElementById('warning').textContent = "Required inputs must be filled."
    }
  }
})