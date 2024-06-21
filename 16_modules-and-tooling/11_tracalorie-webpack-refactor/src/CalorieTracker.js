import Storage from './Storage';
class CalorieTracker {
  constructor() {
    this._calorieLimit = Storage.getCalorieLimit();
    this._totalCalories = Storage.getTotalCalories();
    this._meals = Storage.getMeals();
    this._workouts = Storage.getWorkouts();

    this._displayCaloriesLimit();
    this._displayCaloriesTotal();
    this._displayCaloriesConsumed();
    this._displayCaloriesBurned();
    this._displayCaloriesRemaining();
    this._displayCalorieProgress();

    document.getElementById('limit').value = this._calorieLimit;
  }

  addMeal(meal) {
    this._meals.push(meal);
    this._totalCalories += meal.calories;
    Storage.updateTotalCalories(this._totalCalories);
    Storage.saveMeal(meal);
    this._displayNewMeal(meal);
    this._render(meal);
    // this._printMeals();
  }

  _printMeals() {
    this._meals.forEach((meal) => console.log(meal.name, meal.calories));
  }

  addWorkout(workout) {
    this._workouts.push(workout);
    this._totalCalories -= workout.calories;
    Storage.updateTotalCalories(this._totalCalories);
    Storage.saveWorkout(workout);
    this._displayNewWorkout(workout);
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

  _displayNewMeal(meal) {
    const mealsElement = document.getElementById('meal-items');
    const newMealElement = document.createElement('div');
    newMealElement.classList.add('card', 'my-2');
    newMealElement.setAttribute('data-id', meal.id);
    newMealElement.innerHTML = `
      <div class='card-body'>
        <div class='d-flex align-items-center justify-content-between'>
          <h4 class='mx-1'>${meal.name}</h4>
          <div class='fs-1 bg-primary text-white text-center rounded-2 px-2 px-sm-5'>
            ${meal.calories}
          </div>
          <button class='delete btn btn-danger btn-sm mx-2'>
            <i class='fa-solid fa-xmark'></i>
          </button>
        </div>
      </div>
    `;
    mealsElement.appendChild(newMealElement);
  }

  _displayNewWorkout(workout) {
    const workoutsElement = document.getElementById('workout-items');
    const newWorkoutElement = document.createElement('div');
    newWorkoutElement.classList.add('card', 'my-2');
    newWorkoutElement.setAttribute('data-id', workout.id);
    newWorkoutElement.innerHTML = `
      <div class='card-body'>
        <div class='d-flex align-items-center justify-content-between'>
          <h4 class='mx-1'>${workout.name}</h4>
          <div class='fs-1 bg-secondary text-white text-center rounded-2 px-2 px-sm-5'>
            ${workout.calories}
          </div>
          <button class='delete btn btn-danger btn-sm mx-2'>
            <i class='fa-solid fa-xmark'></i>
          </button>
        </div>
      </div>
    `;
    workoutsElement.appendChild(newWorkoutElement);
  }

  removeMeal(id) {
    const index = this._meals.findIndex((meal) => meal.id === id);

    // When the meal is found
    if (index !== -1) {
      const meal = this._meals[index];
      this._totalCalories -= meal.calories;
      Storage.updateTotalCalories(this._totalCalories);
      Storage.removeMeal(id);

      // Remove the meal present at index location
      this._meals.splice(index, 1);
      this._render();
    }
  }

  removeWorkout(id) {
    const index = this._workouts.findIndex((workout) => workout.id === id);

    // When the workout is found
    if (index !== -1) {
      const workout = this._workouts[index];
      this._totalCalories += workout.calories;
      Storage.updateTotalCalories(this._totalCalories);
      Storage.removeWorkout(id);

      // Remove the workout present at index location
      this._workouts.splice(index, 1);
      this._render();
    }
  }

  reset() {
    this._totalCalories = 0;
    this._meals = [];
    this._workouts = [];
    Storage.clearAll();
    this._render();
  }

  setCalorieLimit(calorieLimit) {
    this._calorieLimit = calorieLimit;
    Storage.setCalorieLimit(calorieLimit);
    this._displayCaloriesLimit();
    this._render();

    document.getElementById('limit').value = this._calorieLimit;
  }

  loadItems() {
    this._meals.forEach((meal) => this._displayNewMeal(meal));
    this._workouts.forEach((workout) => this._displayNewWorkout(workout));
  }

  _render() {
    this._displayCaloriesTotal();
    this._displayCaloriesConsumed();
    this._displayCaloriesBurned();
    this._displayCaloriesRemaining();
    this._displayCalorieProgress();
  }
}

export default CalorieTracker;
