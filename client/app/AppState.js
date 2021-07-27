import Car from "./Models/Car.js"
import House from "./Models/House.js"
import Job from "./Models/Jobs.js"
import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"

class AppState extends EventEmitter {

  /** @type {Car[]} */
  cars = [
    // new Car({
    //   make: 'Ford',
    //   model: 'Pinto',
    //   year: 1987,
    //   price: 1200,
    //   description: 'This Car is HOT!',
    //   imgUrl: 'https://blog.automedicsafrica.com/wp-content/uploads/2015/08/Impala-vs-Pinto-750x547.jpg'
    // }),
    // new Car({
    //   make: 'VW',
    //   model: 'Gremlin',
    //   year: 1988,
    //   price: 3400,
    //   description: 'Lime Green! You gonna love it',
    //   imgUrl: 'https://static1.hotcarsimages.com/wordpress/wp-content/uploads/2020/07/Gremlin-X.jpg'
    // })
  ]

  /** @type {House[]} */
  houses = [
    // new House({
    //   bedrooms: 2, 
    //   bathrooms: 1.5, 
    //   isHoa: false, 
    //   price: 250000, 
    //   imgurl: 'https://images.unsplash.com/photo-1588880331179-bc9b93a8cb5e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Y290dGFnZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    //   description: 'Perfect for a small family and dog.'
    // }),
    // new House({
    //   bedrooms: 5, 
    //   bathrooms: 4.4, 
    //   isHoa: true, 
    //   price: 600000000, 
    //   imgurl: 'https://images.unsplash.com/photo-1416331108676-a22ccb276e35?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWFuc2lvbnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    //   description: 'So extra.'
    // })
  ]

  jobs=[
    new Job({
      jobType: 'Witcher',
      price: 50.00,
      imgUrl: 'https://images.unsplash.com/photo-1620747918456-6db88fea1e84?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8c3dvcmRzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      description: 'Witcher needed to take care of some monsters at a local farm.'
    }),
    new Job({
      jobType: 'Code Monkey',
      price: 20.00,
      imgUrl: 'https://images.unsplash.com/photo-1585302397435-c7fc5c53352a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bW9ua2V5JTIwd2l0aCUyMGdsYXNzZXN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      description: 'Code monkey do code thing. Want type at desk. Want type code. Type good.'
    })
  ]

}


export const ProxyState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})