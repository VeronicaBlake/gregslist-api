import CarsController from "./Controllers/CarsController.js";
import HousesController from "./Controllers/HousesController.js";

class App {
  // valuesController = new ValuesController()
  carsController = new CarsController()
  //must register new controllers 
  housesController = new HousesController()
  jobsController = new this.jobsController()

}

window["app"] = new App();
