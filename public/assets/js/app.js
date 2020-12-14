let day = 'monday'
let workoutIndex = '-1'
let customWorkoutId = '-1'
let premadeWorkout = {}
let premadeRoutine = {}
let dragStartDay = 'monday'
let dragEndDay = 'monday'


const getCustomWorkouts = () => {
  return JSON.parse(localStorage.getItem('fitness_edge_custom_workouts'))
}

const setCustomWorkouts = (custom) => {
  return localStorage.setItem('fitness_edge_custom_workouts', JSON.stringify(custom))
}

const setRoutines = (routines) => {
  localStorage.setItem('fitness_edge_weekly_routines', JSON.stringify(routines))
}
const getRoutines = () => {
  return JSON.parse(localStorage.getItem('fitness_edge_weekly_routines'))
}


const randInt = (max) => {
  return Math.floor(Math.random() * max)
}

///Adding and Editing Custom Workouts to Routines

// document.getElementById('addPremadeRoutineToDay').addEventListener('click', (event) => {
//   let routineTemplate = document.getElementById('premadeRoutineList')
//   let htmlText = ''
//   premadeRoutine.workouts.forEach(({ title, muscle, sets, reps, weight, description }) => {
//     htmlText += `
//     <li>
//       <div class="card z-depth-2 hoverable">
//         <div class="card-content textWhite">
//           <p>Title: ${title}</p>
//           <p>Muscle: ${muscle}</p>
//           <p>Sets: ${sets}</p>
//           <p>Reps: ${reps}</p>
//     `
//     htmlText += (weight) ? `<p>Weight: ${weight}</p>` : ``
//     htmlText += (description) ? `<p>Description: ${description}</p>` : ``

//     htmlText += '</div></div></li>'
//   })

//   routineTemplate.innerHTML = htmlText

// })

const clearTemplateForm = () => {
  document.getElementById('premadeCard').textContent = ''
  document.getElementById('addPremadeToRoutine').style.display = 'none'
}

document.getElementById('addPremadeToRoutine').addEventListener('click', (event) => {
  let routines = getRoutines()
  if (workoutIndex < 0) {
    routines[day].push(premadeWorkout)
    setRoutines(routines)
    renderSingleRoutine(day)
  } else {
    routines[day][workoutIndex] = premadeWorkout
    setRoutines(routines)
    renderWorkout(day, workoutIndex)
  }
  premadeWorkout = {}
  clearTemplateForm()
  clearAddCustomForm()
  $('.modal').modal('close')
})


const clearAddCustomForm = () => {
  document.getElementById('title').value = ''
  document.getElementById('legs').checked = true
  document.getElementById('sets').value = ''
  document.getElementById('reps').value = ''
  document.getElementById('weight').value = ''
  document.getElementById('description').value = ''
  document.getElementById('warning').textContent = ''
}

const getSelectedMuscle = () => {
  let muscles = document.querySelectorAll('input[name="muscle"]')
  let len = muscles.length
  for (let i = 0; i < len; i++) {
    if (muscles[i].checked) {
      return muscles[i].value
    }
  }
}

const validateWorkout = ({ title, sets, reps }) => {
  if (title === '') {
    return false
  }
  if (isNaN(parseInt(sets))) {
    return false
  }
  if (reps === '') {
    return false
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
  let workout = {
    title: document.getElementById('title').value,
    muscle: getSelectedMuscle(),
    sets: document.getElementById('sets').value,
    reps: document.getElementById('reps').value,
    weight: (document.getElementById('weight').value) ? document.getElementById('weight').value : null,
    description: (document.getElementById('description').value) ? document.getElementById('description').value : null
  }

  if (validateWorkout(workout)) {
    let routines = getRoutines()

    if (workoutIndex < 0) {
      routines[day].push(workout)
      setRoutines(routines)
      renderSingleRoutine(day)

    } else {
      routines[day][workoutIndex] = workout
      setRoutines(routines)
      renderWorkout(day, workoutIndex)
    }

    premadeWorkout = {}
    clearTemplateForm()
    clearAddCustomForm()
    $('.modal').modal('close')

  } else {
    document.getElementById('warning').textContent = "Required inputs must be filled correctly."
  }
})

///Change ModelTitle
const changeModelTitle = () => {
  let modalTitle = document.getElementById("modalTitle")

  modalTitle.textContent = 'What workouts are we doing this { day }?'
  modalTitle.textContent = modalTitle.textContent.replace("{ day }", day[0].toUpperCase() + day.substring(1))
}

///Listener for Click Events///
document.addEventListener('click', (event) => {
  if (event.target.classList.contains("addWorkout")) {

    day = event.target.dataset.day
    workoutIndex = -1

    changeModelTitle()
    clearAddCustomForm()

  } else if (event.target.classList.contains("premadeWorkout")) {
    let id = event.target.dataset.id
    axios.get(`/api/workouts/${id}`)
      .then(({ data }) => {
        premadeWorkout = data
        renderPremadeTemplate(premadeWorkout)
      })
      .catch(err => console.log(err))

  } else if (event.target.classList.contains("editWorkout")) {
    day = event.target.dataset.day
    workoutIndex = event.target.dataset.index
    changeModelTitle()

    let { title, muscle, sets, reps, weight, description } = getRoutines()[day][workoutIndex]

    document.getElementById("title").value = title
    document.getElementById(muscle).checked = true
    document.getElementById("sets").value = sets
    document.getElementById("reps").value = reps

    if (weight) {
      document.getElementById("weight").value = weight
    } else {
      document.getElementById("weight").value = ''
    }

    if (description) {
      document.getElementById("description").value = description
    } else {
      document.getElementById("description").value = ''
    }

  } else if (event.target.classList.contains('deleteWorkout')) {
    day = event.target.dataset.day
    workoutIndex = event.target.dataset.index

    let routines = getRoutines()
    routines[day].splice(workoutIndex, 1)

    setRoutines(routines)
    renderSingleRoutine(day)

  } else if (event.target.classList.contains('deleteRoutine')) {
    day = event.target.dataset.day

    let routines = getRoutines()
    routines[day] = []

    setRoutines(routines)
    renderSingleRoutine(day)
  }

})

///Rendering Workout and Routines
const renderPremadeTemplate = ({ title, muscle, sets, reps, weight, description }) => {
  let htmlText = `
    <h6 class="truncate wrkotTitle ">
      ${title}
    </h6>
    
    <p>Muscle: ${muscle}</p>
    <p>Sets: ${sets}</p>
    <p>Reps: ${reps}</p>
    `
  htmlText += (weight) ? `<p>Weight: ${weight}</p>` : ``
  htmlText += (description) ? `<p>Description:</p> <p>${description}</p>` : ``

  document.getElementById('premadeCard').innerHTML = htmlText
  document.getElementById('addPremadeToRoutine').style.display = 'block'
}

const renderPremadeWorkoutsTable = () => {
  let htmlText = document.getElementById("premadeTable").innerHTML
  axios.get('/api/workouts')
    .then(({ data }) => {
      let types = {
        legs: [],
        chest: [],
        shoulders: [],
        back: [],
        biceps: [],
        triceps: [],
        core: []
      }

      data.forEach(workout => {
        types[workout.muscle].push(workout)
      })
      let len = 0
      let muscles = ["legs", "chest", "shoulders", "back", "biceps", "triceps", "core"]
      for (let i = 0; i < 7; i++) {
        if (types[muscles[i]].length > len) {
          len = types[muscles[i]].length
        }
      }
      let htmlText = document.getElementById("premadeTable").innerHTML
      for (let i = 0; i < len; i++) {
        htmlText += '<tr>'
        for (let j = 0; j < 7; j++) {
          if (types[muscles[j]].length > i) {
            let { id, title } = types[muscles[j]][i]
            htmlText += `<td class="premadeWorkout z-depth-2 hoverable" data-id="${id}">${title}</td>`
          } else {
            htmlText += `<td class="z-depth-2"></td>`
          }
        }
        htmlText += '</tr>'
      }
      document.getElementById("premadeTable").innerHTML = htmlText
    })
    .catch(err => { console.error(err) })
}

const renderWorkout = (day, index) => {
  let { title, muscle, sets, reps, weight, description } = getRoutines()[day][index]
  let htmlText = `
    <h6 class="truncate wrkotTitle">
      <a class="halfway-fab waves-effect waves-light modal-trigger" href="#modal">
        <i class="material-icons editWorkout" data-day="${day}" data-index="${index}">fitness_center</i>
      </a>
      ${title}
    </h6>
    <p>Muscle: ${muscle[0].toUpperCase() + muscle.substring(1)}</p>
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
  htmlText += `<p class="close"><i class="fas fa-trash-alt deleteWorkout" data-day="${day}" data-index="${index}"></i></p></div>`
  document.getElementById(`${day}-${index}`).innerHTML = htmlText
}

const renderSingleRoutine = (day) => {
  let htmlText = ''
  let routine = getRoutines()[day]
  routine.forEach(({ title, muscle, sets, reps, weight, description }, i) => {
    htmlText += `
      <div class="card hoverable wrkotCard textWhite" data-day="${day}" data-index="${i}" id="${day}-${i}">
        <h6 class="truncate wrkotTitle ">
          <a class="halfway-fab waves-effect waves-light modal-trigger" href="#modal">
            <i class="material-icons editWorkout" data-day="${day}" data-index="${i}">fitness_center</i>
          </a>
          ${title}
        </h6>
        <p>Muscle: ${muscle[0].toUpperCase() + muscle.substring(1)}</p>
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
    htmlText += `<p class="close"><i class="fas fa-trash-alt deleteWorkout" data-day="${day}" data-index="${i}"></i></p></div>`
  })
  document.getElementById(`${day}Routine`).innerHTML = htmlText
}

const renderAllRoutines = () => {

  let weekdays = ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"]
  let routines = getRoutines()
  weekdays.forEach(day => {
    renderSingleRoutine(day)
  })

}

///Initalizing

const init = () => {
  let workouts = JSON.parse(localStorage.getItem('fitness_edge_custom_workouts'))
  if (!workouts) {
    workouts = []
    localStorage.setItem('fitness_edge_custom_workouts', JSON.stringify([]))
  }

  let routines = JSON.parse(localStorage.getItem('fitness_edge_weekly_routines'))
  if (!routines) {
    let routines = {
      monday: [],
      tuesday: [],
      wednesday: [],
      thursday: [],
      friday: [],
      saturday: [],
      sunday: []
    }

    localStorage.setItem('fitness_edge_weekly_routines', JSON.stringify(routines))
  }

  renderAllRoutines()
  renderPremadeWorkoutsTable()

  //Dragula init
  let containers = [document.getElementById('mondayRoutine'), document.getElementById('tuesdayRoutine'), document.getElementById('wednesdayRoutine'), document.getElementById('thursdayRoutine'), document.getElementById('fridayRoutine'), document.getElementById('saturdayRoutine'), document.getElementById('sundayRoutine')]
  dragula(containers)
    .on('drag', function (el) {
      dragStartDay = el.dataset.day
      el.className = el.className.replace('ex-moved', '');
    })
    .on('drop', function (el) {
      el.className += ' ex-moved';
      let index = el.dataset.index
      let oldRoutines = getRoutines()
      let newRoutines = getRoutines()

      newRoutines[dragStartDay].splice(index, 1)
      let nodes = document.getElementById(`${dragEndDay}Routine`).childNodes
      let offset = 0
      nodes.forEach((node, i) => {
        if (node.id) {
          if (node === el) {
            newRoutines[dragEndDay].splice(i - offset, 0, oldRoutines[dragStartDay][index])
            setRoutines(newRoutines)
            renderSingleRoutine(dragStartDay)
            renderSingleRoutine(dragEndDay)
          }
        } else {
          offset++
        }
      })
    })
    .on('over', function (el, container) {
      dragEndDay = container.dataset.day
      container.className += ' ex-over';
    })
    .on('out', function (el, container) {
      container.dataset.day
      container.className = container.className.replace('ex-over', '');
    });

}

init()