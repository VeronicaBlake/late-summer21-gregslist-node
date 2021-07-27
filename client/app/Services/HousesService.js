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
            const res = await api.delete('houses/' + houseId)
            console.log(res.data)
            ProxyState.houses = ProxyState.houses.filter( h => h.id != houseId)
        }catch{
            console.error(error)
        }
    }
    async bidHouse(houseId){
        try {
            let foundHouse = ProxyState.houses.find(h => h.id == houseId)
            foundHouse.price += 100
            const res = await api.put('houses/' + houseId, foundHouse)
            console.log('updated house', res.data)
            ProxyState.houses = ProxyState.houses
        } catch (error) {
            console.error(error)
        }
    } 
    
}

export const housesService = new HousesService()