import { ProxyState } from "../AppState.js"
import House from "../Models/House.js"
import { api } from './AxiosService.js'

class HousesService{
    constructor(){
        this.getAllHouses()
    }
    async createHouse(rawHouse){
        const res = await api.post('houses', rawHouse)
        ProxyState.houses = [...ProxyState.houses, new House(res.data)]
    }
    async getAllHouses(){
        try{
            const res = await api.get('houses')
            ProxyState.houses = res.data.map(h => new House(h))
        }catch (error){
            console.error(error)
        }
    }
    async deleteHouse(houseId){
        try{

        }catch{
            console.error(error)
        }
    }
    
}

export const housesService = new HousesService()