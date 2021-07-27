import { ProxyState } from "../AppState.js"
import { housesService } from "../Services/HousesService.js"

//make a draw so that we can import the template
function _draw(){
   let template = ''
   //houses needs to be declared in the proxystate
   ProxyState.houses.forEach(house => {
       template += house.Template
   })
   document.getElementById('houses').innerHTML = template
}

export default class HousesController{
    //our controller needs to 
    constructor(){
        //register a listener
        //listening to 'houses' on line 12
        ProxyState.on('houses', _draw)
        ProxyState.on('houses', () => { console.log('new house') })
        _draw()
    }

    async createHouse(){
        try{
            //prevent default here so that the page don't refresh
            event.preventDefault()
            //this makes it easier for us to write the rawHouse. it's saying form is what we're taking in
            let form = event.target
            let rawHouse ={
                bedrooms: form.bedrooms.value,
                bathrooms: form.bathrooms.value,
                levels: form.levels.value, 
                year: form.year.value,
                price: form.price.value, 
                imgUrl: form.imgUrl.value,
                description: form.description.value
            }
            await housesService.createHouse(rawHouse)
            form.reset()
        }catch{
            console.error(error)
            window.alert(error.message)
        }
    }

    deleteHouse(houseId){
        console.log('your neeeww house!', houseId)
        housesService.deleteHouse(houseId)
    }
    bidHouse(houseId){
        console.log('you bid on:', houseId)
        housesService.bidHouse(houseId)
    }
}