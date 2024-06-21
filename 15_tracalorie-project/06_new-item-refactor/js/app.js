class CalorieTracker {
  constructor() {
    this._calorieLimit = 2000;
    this._totalCalories = 0;
    this._meals = [];
    this._workouts = [];

    this._displayCaloriesLimit();
    this._displayCaloriesTotal();
    this._displayCaloriesConsumed();
    this._displayCaloriesBurned();
    this._displayCaloriesRemaining();
    this._displayCalorieProgress();
  }

  addMeal(meal) {
    this._meals.push(meal);
    this._totalCalories += meal.calories;
    this._render();
    // this._printMeals();
  }

  _printMeals() {
    this._meals.forEach((meal) => console.log(meal.name, meal.calories));
  }

  addWorkout(workout) {
    this._workouts.push(workout);
    this._totalCalories -= workout.calories;
    this._render();
    // this._printWorkouts();
  }
  _printWorkouts() {
    this._workouts.forEach((workout) =>
      console.log(workout.name, workout.calories)
    );
  }

  _displayCaloriesTotal() {
    const totalCaloriesEl = document.getElementById('calories-total');
    totalCaloriesEl.innerHTML = this._totalCalories;
  }

  _displayCaloriesLimit() {
    const calorieLimitEl = document.getElementById('calories-limit');
    calorieLimitEl.innerHTML = this._calorieLimit;
  }

  _displayCaloriesConsumed() {
    const caloriesConsumedEl = document.getElementById('calories-consumed');

    const consumed = this._meals.reduce(
      (total, meal) => total + meal.calories,
      0
    );

    caloriesConsumedEl.innerHTML = consumed;
  }

  _displayCaloriesBurned() {
    const caloriesBurnedEl = document.getElementById('calories-burned');

    const burned = this._workouts.reduce(
      (total, workout) => total + workout.calories,
      0
    );

    caloriesBurnedEl.innerHTML = burned;
  }

  _displayCaloriesRemaining() {
    const caloriesRemainingElement =
      document.getElementById('calories-remaining');
    const caloriesProgressElement = document.getElementById('calorie-progress');
    const remaining = this._calorieLimit - this._totalCalories;

    caloriesRemainingElement.innerHTML = remaining;

    if (remaining <= 0) {
      caloriesRemainingElement.parentElement.classList.remove('bg-light');
      caloriesRemainingElement.parentElement.classList.add('bg-danger');
      caloriesProgressElement.classList.add('bg-danger');
      caloriesProgressElement.classList.remove('bg-success');
    } else {
      caloriesRemainingElement.parentElement.classList.remove('bg-danger');
      caloriesRemainingElement.parentElement.classList.add('bg-light');
      caloriesProgressElement.classList.remove('bg-danger');
      caloriesProgressElement.classList.add('bg-success');
    }
  }

  _displayCalorieProgress() {
    const caloriesProgressElement = document.getElementById('calorie-progress');
    const progressPercentage = (this._totalCalories / this._calorieLimit) * 100;
    const width = Math.min(progressPercentage, 100);
    caloriesProgressElement.style.width = `${width}%`;
  }

  _render() {
    this._displayCaloriesTotal();
    this._displayCaloriesConsumed();
    this._displayCaloriesBurned();
    this._displayCaloriesRemaining();
    this._displayCalorieProgress();
  }
}

class Meal {
  constructor(name, calories) {
    this.id = Math.random().toString(16).slice(2);
    this.name = name;
    this.calories = calories;
  }
}

class Workout {
  constructor(name, calories) {
    this.id = Math.random().toString(16).slice(2);
    this.name = name;
    this.calories = calories;
  }
}

class App {
  constructor() {
    this._tracker = new CalorieTracker();

    document
      .getElementById('meal-form')
      .addEventListener('submit', this._newItem.bind(this, 'meal'));
    document
      .getElementById('workout-form')
      .addEventListener('submit', this._newItem.bind(this, 'workout'));
  }

  _newItem(type, e) {
    e.preventDefault();

    const name = document.getElementById(`${type}-name`);
    const calories = document.getElementById(`${type}-calories`);

    // Validate the user input
    if (name.value === '' || calories.value === '') {
      alert('Please fill in all fields.');
      return;
    }

    if (type === 'meal') {
      // Create a new meal
      const meal = new Meal(name.value, +calories.value);

      // Add the meal to the tracker
      this._tracker.addMeal(meal);
    } else {
      // Create a new workout
      const workout = new Workout(name.value, +calories.value);

      // Add the workout to the tracker
      this._tracker.addWorkout(workout);
    }

    // Clear the form
    name.value = '';
    calories.value = '';

    // Collapse the form
    const collapseItem = document.getElementById(`collapse-${type}`);
    const bsCollapse = new bootstrap.Collapse(collapseItem, { toggle: true });
  }
}

const app = new App();
