// Array methods 

// and array of object 

const products = [
    {name: "leptop" , price : 3222, color:"black" ,brand: "lenovo"},
    {name: "watch" , price : 22, color:"yello" ,brand: "gucci"},
    {name: "i phone" , price : 30000, color:"Gold" ,brand: "india"},
    {name: "computer" , price : 1220, color:"red" ,brand: "corei5"},
]

// array of object or map 
const brands = products.map(b => b.brand)
// console.log(brands)

const hooks = products.map(a => a.name)
// console.log(hooks)

// arrow function to map
const prices = products.map(price => price.price)
// console.log(prices)

// arrow function to forEach to inline
// products.forEach(products => console.log(products));
// products.forEach(products => console.log(products.color))

// filter 

// const cheap = products.filter(product => product.price >= 1000)
// console.log(cheap)

//  filter to specie cracter

const specieName = products.filter(p => p.color.includes('o'))
console.log("Just Filter : ", specieName)


// filter and find
const special = products.find(d => d.color.includes('o'))
console.log("Just to find : ",special)