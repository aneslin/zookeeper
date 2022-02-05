const fs = require('fs')
const {filterByQuery,findById, createNewZookeeper, validateZookeeper} 
= require('../lib/zookeepers')
const {zooKeepers} = require('../data/zookeepers')

jest.mock("fs");


const { zookeepers } = require("../data/zookeepers");

jest.mock("fs");
test("creates an zookeeper object", () => {
  const zookeeper = createNewZookeeper(
    { name: "Darlene", id: "jhgdja3ng2" },
    zookeepers
  );

  expect(zookeeper.name).toBe("Darlene");
  expect(zookeeper.id).toBe("jhgdja3ng2");
});

test("filter by query", ()=>{
  const zookeepersarray = [ {
    id: "3",
    name: "Linda",
    age: 48,
    favoriteAnimal: "otter"
  },
  {
    id: "4",
    name: "Ryan",
    age: 20,
    favoriteAnimal: "dog"
  } ]
const results = filterByQuery({name:"Ryan"},zookeepersarray );
expect(results.length).toEqual(1);
})

test("find by id", ()=>{
    const zookeepersarray =  [ {
        id: "3",
        name: "Linda",
        age: 48,
        favoriteAnimal: "otter"
      },
      {
        id: "4",
        name: "Ryan",
        age: 20,
        favoriteAnimal: "dog"
      } ]
    
const result = findById("3", zookeepersarray)
expect(result.name).toBe("Linda")
})

test("validates age", () => {
    const zookeeper = {
      id: "2",
      name: "Raksha",
      age: 31,
      favoriteAnimal: "penguin",
    };
  
    const invalidZookeeper = {
      id: "3",
      name: "Isabella",
      age: "67",
      favoriteAnimal: "bear",
    };
  
    const result = validateZookeeper(zookeeper);
    const result2 = validateZookeeper(invalidZookeeper);
  
    expect(result).toBe(true);
    expect(result2).toBe(false);
  });
