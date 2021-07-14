export default class House{
    //image deconstruction to bring in the elements from the rawHouse
    constructor({bedrooms, bathrooms, isHoa, price, imageUrl, description}){
        this.bedrooms = bedrooms, 
        this.bathrooms = bathrooms, 
        this.isHoa = isHoa || 'unknown',
        this.price = price, 
        this.imageUrl = imageUrl || '//placehold.it/200x200',
        this.description = description || 'no description given'

    }
    get Template(){
        return `
    <div class="col-md-3 col-sm-2 my-3">
      <div class="car bg-light shadow">
          <img src="${this.imageUrl}" class="w-100" alt="${this.bedrooms} ${this.bathrooms} car image">
          <div class="p-3">
              <div class="text-center">
                  <p><b>Hoa: ${this.isHoa} - Bedrooms: ${this.bedrooms} - Bathrooms: ${this.bathrooms}</b></p>
              </div>
              <p>${this.description}</p>
              <p><em>$${this.price}</em></p>
          </div>
      </div>
    </div>
    `
    }
}