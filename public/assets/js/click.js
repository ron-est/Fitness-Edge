document.addEventListener('click', (event) => {
  if (event.target.classList.contains("addWorkout")) {

    let day = event.target.dataset.day
    let modal = document.getElementById("modal")

    modal.dataset.day = day
    modal.dataset.index = -1

    let modalTitle = document.getElementById("modalTitle")

    modalTitle.textContent = 'What workouts are we doing this { day }?'

    day = day[0].toUpperCase() + day.substring(1)

    modalTitle.textContent = modalTitle.textContent.replace("{ day }", day)

  } else if (event.target.classList.contains("premadeWorkout")) {
    // let id = event.target.dataset.id
    // axios.get(`/api/workouts/${id}`)
    // .then(({data})=>{

    // })
    // .catch(err=>console.log(err))
  } else if (event.target.classList.contains("editWorkout")) {
    let day = event.target.dataset.day
    let index = event.target.dataset.index
    document.getElementById('modal').dataset.day = day
    document.getElementById('modal').dataset.index = index
    let { title, muscle, sets, reps, weight, description } = getRoutines()[day][index]
    document.getElementById("title").value = title
    document.getElementById("muscle").value = muscle
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

  }
})