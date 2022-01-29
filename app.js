//creare menu object
const menu = {
  //create addDish method
  addDishToCourse(courseName, dishName, dishPrice) {
    const dish = {
      name: dishName,
      price: dishPrice,
    };
    return this._courses[courseName].push(dish);
  },

  //create getRandomDish method

  getRandomDishFromCourse(courseName) {
    const dishes = this._courses[courseName];
    const randomIndex = Math.floor(Math.random() * dishes.length);
    return dishes[randomIndex];
  },

  //cretevgenerate random meal function
  generateRandomMeal() {
    const appetizer = this.getRandomDishFromCourse("appetizers");
    const main = this.getRandomDishFromCourse("mains");
    const dessert = this.getRandomDishFromCourse("desserts");
    const totalPrice = appetizer.price + main.price + dessert.price;

    return `Your meal is ${appetizer.name} and ${main.name} and ${dessert.name} and The price is ${totalPrice}.`;
  },
  //create courses propert and set it to empty object
  _courses: {
    appetizers: [],
    mains: [],
    desserts: [],
  },

  //getter for courses
  get courses() {
    return {
      appetizers: this.appetizers,
      mains: this.mains,
      desserts: this.desserts,
    };
  },

  //create getters and setters for courses
  get appetizers() {
    return this._courses.appetizers;
  },
  set appetizers(appetizer) {
    this._courses.appetizer = appetizer;
  },
  get mains() {
    return this._courses.mains;
  },
  set mains(mains) {
    this._courses.mains = mains;
  },
  get desserts() {
    return this._courses.desserts;
  },
  set desserts(desserts) {
    this._courses.desserts = desserts;
  },
};
menu.addDishToCourse("appetizers", "Caesar Salad", 4.25);
menu.addDishToCourse("appetizers", "waakye", 14.25);
menu.addDishToCourse("appetizers", " Salad", 2.25);

menu.addDishToCourse("mains", "Caesar Salad", 9.25);
menu.addDishToCourse("mains", "wings", 14.25);
menu.addDishToCourse("mains", " fries", 21.25);

menu.addDishToCourse("desserts", "vanila", 3.25);
menu.addDishToCourse("desserts", "choco", 4.25);
menu.addDishToCourse("desserts", " strawberry", 12.25);

const meal = menu.generateRandomMeal();
console.log(meal);
