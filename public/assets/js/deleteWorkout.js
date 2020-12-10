document.addEventListener('click', event => {
  if (event.target.classList.contains('deleteWorkout')) {
    axios.delete(`/api/workouts/${event.target.dataset.id}`)
      .then(() => { location.reload() })
      .catch(err => console.log(err))
  }
})