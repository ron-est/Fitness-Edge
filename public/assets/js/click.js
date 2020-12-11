document.addEventListener('click', (event) => {
  if (event.target.classList.contains("material-icons")) {
    let modal = document.getElementById("modal")
    modal.dataset.day = event.target.dataset.day
    modal.dataset.index = event.target.dataset.index
    let modalTitle = document.getElementById("modalTitle")
    modalTitle.textContent = 'What workouts are we doing this { day }?'
    modalTitle.textContent = modalTitle.textContent.replace("{ day }", event.target.dataset.day)
  } else if (event.target.classList.contains("premadeWorkout")){
    // let id = event.target.dataset.id
    // axios.get(`/api/workouts/${id}`)
    // .then(({data})=>{

    // })
    // .catch(err=>console.log(err))
  }
})