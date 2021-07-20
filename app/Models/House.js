export default class House{
    //image deconstruction to bring in the elements from the rawHouse
    constructor({id, year, bedrooms, bathrooms, price, description, imgUrl, levels, }){
        this.id = id
        this.year = year
        this.bedrooms = bedrooms, 
        this.bathrooms = bathrooms, 
        this.price = price, 
        this.description = description || 'no description given'
        this.imgUrl = imgUrl || '//placehold.it/200x200',
        this.levels = levels

    }
    get Template(){
        return `
    <div class="col-md-3 col-sm-2 my-3">
      <div class="car bg-light shadow">
          <img src="${this.imgUrl}" class="w-100" alt="${this.bedrooms} ${this.bathrooms} car image">
          <div class="p-3">
              <div class="text-center">
                  <p><b>levels: ${this.levels} - Bedrooms: ${this.bedrooms} - Bathrooms: ${this.bathrooms}</b></p>
              </div>
              <p>${this.description}</p>
              <p><em>$${this.price}</em></p>
          </div>
      </div>
    </div>
    `
    }
}