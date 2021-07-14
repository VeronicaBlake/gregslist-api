export default class Job{
    //image deconstruction to bring in the elements from the rawHouse
    constructor({jobType, price, imageUrl, description}){
        this.jobType = jobType, 
        this.price = price, 
        this.imageUrl = imageUrl || '//placehold.it/200x200',
        this.description = description || 'no description given'

    }
    get Template(){
        return `
    <div class="col-md-3 col-sm-2 my-3">
      <div class="car bg-light shadow">
          <img src="${this.imageUrl}" class="w-100" alt="job image">
          <div class="p-3">
              <div class="text-center">
                  <p><b>Bedrooms: ${this.jobType}</b></p>
              </div>
              <p>${this.description}</p>
              <p><em>$${this.price}</em></p>
          </div>
      </div>
    </div>
    `
    }
}

//1. make the model
//2. register controller in main
//3. register in AppState