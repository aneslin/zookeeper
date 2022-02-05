const fs = require('fs')
const {filterByQuery,findById,  createNewAnimal, validateAnimal} 
= require('../lib/animals')
const {animals} = require('../data/animals.json')

jest.mock("fs");



test("create new animals", ()=>{
    const newAnimal = createNewAnimal({name:"bob", 
                                    species:"turtle",
                                    id:'1298712394712984372190417',
                                    diet:"omnivore",
                                    personalityTraits:[
                                        "grumpy"
                                    ]}, animals)
expect(newAnimal.name).toBe("bob");
expect(newAnimal.species).toBe("turtle");
expect(newAnimal.diet).toBe("omnivore");
expect(newAnimal.personalityTraits)

})

test("filter by query", ()=>{
  const animalArray = [  {
        id: "1",
        name: "Terry",
        species: "gorilla",
        diet: "omnivore",
        personalityTraits: [
          "anxious",
          "goofy"
        ]
      },
      {
        id: "2",
        name: "Erica",
        species: "muskrat",
        diet: "omnivore",
        personalityTraits: [
          "quirky",
          "rash"
        ]

    

      }]
const results = filterByQuery({species:"gorilla"}, animalArray);
expect(results.length).toEqual(1);
})

test("find by id", ()=>{
    const animalArray = [  {
        id: "1",
        name: "Terry",
        species: "gorilla",
        diet: "omnivore",
        personalityTraits: [
          "anxious",
          "goofy"
        ]
      },
      {
        id: "2",
        name: "Erica",
        species: "muskrat",
        diet: "omnivore",
        personalityTraits: [
          "quirky",
          "rash"
        ] } ]
const result = findById("2", animalArray)
expect(result.name).toBe("Erica")
})

test("validates personality traits", () => {
    const animal = {
      id: "3",
      name: "Erica",
      species: "gorilla",
      diet: "omnivore",
      personalityTraits: ["quirky", "rash"],
    };
  
    const invalidAnimal = {
      id: "3",
      name: "Erica",
      species: "gorilla",
      diet: "omnivore",
    };
  
    const result = validateAnimal(animal);
    const result2 = validateAnimal(invalidAnimal);
  
    expect(result).toBe(true);
    expect(result2).toBe(false);
  });