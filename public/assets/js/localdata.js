

const localDataInit = () => {
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
}

const getCustomWorkouts = () => {
  return JSON.parse(localStorage.getItem('fitness_edge_custom_workouts'))
}

const setRoutines = (routines) => {
  localStorage.setItem('fitness_edge_weekly_routines', JSON.stringify(routines))
}
const getRoutines = () => {
  return JSON.parse(localStorage.getItem('fitness_edge_weekly_routines'))
}

localDataInit()