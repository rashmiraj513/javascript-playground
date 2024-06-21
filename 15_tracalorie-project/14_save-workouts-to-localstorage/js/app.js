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

      // Remove the workout present at index location
      this._workouts.splice(index, 1);
      this._render();
    }
  }

  reset() {
    this._totalCalories = 0;
    this._meals = [];
    this._workouts = [];
    this._render();
  }

  setCalorieLimit(calorieLimit) {
    this._calorieLimit = calorieLimit;
    Storage.setCalorieLimit(calorieLimit);
    this._displayCaloriesLimit();
    this._render();
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

class Storage {
  static getCalorieLimit(defaultCalorieLimit = 2000) {
    let calorieLimit;
    if (localStorage.getItem('calorieLimit') === null) {
      calorieLimit = defaultCalorieLimit;
    } else {
      calorieLimit = +localStorage.getItem('calorieLimit');
    }
    return calorieLimit;
  }

  static setCalorieLimit(calorieLimit) {
    localStorage.setItem('calorieLimit', calorieLimit);
  }

  static getTotalCalories(defaultCalories = 0) {
    let totalCalories;
    if (localStorage.getItem('totalCalories') === null) {
      totalCalories = defaultCalories;
    } else {
      totalCalories = +localStorage.getItem('totalCalories');
    }
    return totalCalories;
  }

  static updateTotalCalories(totalCalories) {
    localStorage.setItem('totalCalories', totalCalories);
  }

  static getMeals() {
    let meals;
    if (localStorage.getItem('meals') === null) {
      meals = [];
    } else {
      meals = JSON.parse(localStorage.getItem('meals'));
    }
    return meals;
  }

  static saveMeal(meal) {
    const meals = Storage.getMeals();
    meals.push(meal);
    localStorage.setItem('meals', JSON.stringify(meals));
  }

  static getWorkouts() {
    let workouts;
    if (localStorage.getItem('workouts') === null) {
      workouts = [];
    } else {
      workouts = JSON.parse(localStorage.getItem('workouts'));
    }
    return workouts;
  }

  static saveWorkout(workout) {
    const workouts = Storage.getWorkouts();
    workouts.push(workout);
    localStorage.setItem('workouts', JSON.stringify(workouts));
  }
}

class App {
  constructor() {
    this._tracker = new CalorieTracker();
    this._loadEventListeners();
    this._tracker.loadItems();
  }

  _loadEventListeners() {
    document
      .getElementById('meal-form')
      .addEventListener('submit', this._newItem.bind(this, 'meal'));
    document
      .getElementById('workout-form')
      .addEventListener('submit', this._newItem.bind(this, 'workout'));

    document
      .getElementById('meal-items')
      .addEventListener('click', this._removeItem.bind(this, 'meal'));
    document
      .getElementById('workout-items')
      .addEventListener('click', this._removeItem.bind(this, 'workout'));

    document
      .getElementById('filter-meals')
      .addEventListener('keyup', this._filterItems.bind(this, 'meal'));
    document
      .getElementById('filter-workouts')
      .addEventListener('keyup', this._filterItems.bind(this, 'workout'));

    document
      .getElementById('reset')
      .addEventListener('click', this._reset.bind(this));

    document
      .getElementById('limit-form')
      .addEventListener('submit', this._setLimit.bind(this));
  }

  _newItem(type, e) {
    e.preventDefault();

    const name = document.getElementById(`${type}-name`);
    const calories = document.getElementById(`${type}-calories`);

    // Validate the user input
    if (name.value === '' || calories.value === '') {
      alert('Please fill in all fields.');
      return;
    } else if (calories.value <= 0) {
      alert('Calories must be positive.');
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

  _removeItem(type, e) {
    if (
      e.target.classList.contains('delete') ||
      e.target.classList.contains('fa-xmark')
    ) {
      if (confirm('Are you sure?')) {
        const id = e.target.closest('.card').getAttribute('data-id');
        type === 'meal'
          ? this._tracker.removeMeal(id)
          : this._tracker.removeWorkout(id);
        const item = e.target.closest('.card');
        item.remove();
      }
    }
  }

  _filterItems(type, e) {
    const text = e.target.value.toLowerCase();
    const items = document.querySelectorAll(`#${type}-items .card`);
    items.forEach((item) => {
      const name = item.firstElementChild.firstElementChild.textContent;

      if (name.toLowerCase().indexOf(text) !== -1) {
        item.style.display = 'block';
      } else {
        item.style.display = 'none';
      }
    });
  }

  _reset() {
    if (confirm('Are you sure?')) {
      this._tracker.reset();
      document.getElementById('meal-items').innerHTML = '';
      document.getElementById('workout-items').innerHTML = '';
      document.getElementById('filter-meals').value = '';
      document.getElementById('filter-workouts').value = '';
    }
  }

  _setLimit(e) {
    e.preventDefault();

    const calorieLimit = document.getElementById('limit');
    this._tracker.setCalorieLimit(+calorieLimit.value);
    calorieLimit.value = '';

    const modalElement = document.getElementById('limit-modal');
    const modal = bootstrap.Modal.getInstance(modalElement);
    modal.hide();
  }
}

const app = new App();
