

const localDataInit = () => {
  let workouts = JSON.parse(localStorage.getItem('fitness_edge_custom_workouts'))
  if (!workouts) {
    workouts = []
    localStorage.setItem('fitness_edge_custom_workouts', JSON.stringify([]))
  }

  let regime = JSON.parse(localStorage.getItem('fitness_edge_weekly_regime'))
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
}

const getWorkouts = () => {
  return JSON.parse(localStorage.getItem('fitness_edge_custom_workouts'))
}

const getRegime = () => {
  return JSON.parse(localStorage.getItem('fitness_edge_weekly_regime'))
}

localDataInit()