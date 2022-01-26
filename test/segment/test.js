console.log("Starting...");

function array2json(theArray) {
  return (Object.assign({}, theArray));  
}

function jsonKeyValues(theObj) {
  let result = {};
  result.keys = Object.keys(theObj);
  result.values = Object.values(theObj);

  return result;
}

function multiple5(theArray) {
  let result = [];
  theArray.forEach(element => {
    if(element%5 == 0) {
      result.push(element);
    }
  });

  return result.reverse();
}


let testArray = []
testArray[0] = ["segment", "dot", "com"];
testArray[1] = ["the","best","customer","data","platform"];
testArray[2] = ["twilio"]

testArray.forEach(element => {
  console.log("Converting Array: " + element);
  console.log("JSON: " + JSON.stringify(array2json(element)));
});

console.log("Completed Array to JSON testing")
console.log("");


let testJson = [];
testJson[0] = {"name" : "john", "age" : 35}
testJson[1] = {"first" : "tom", "last": "smith", "age" : 45}
testJson[2] = {"first" : "mary", "last": "jones", "age" : 28, "company": "Segment", "title": "Solution Architect" }

testJson.forEach(element => {
  console.log("Original JSON: " + JSON.stringify(element));
  console.log("Keys and Values: " + JSON.stringify(jsonKeyValues(element)));
});

console.log("Completed JSON Key/Value testing")
console.log("");

let numberArray = []
numberArray[0] = [1,3,25,10,11];
numberArray[1] = [2,10,17,20,33,45,50,52];
numberArray[2] = [3,6,9,12,15,18,21,24,27,30,33,36,39,42,45,48,51,54,57,60]

numberArray.forEach(element => {
  console.log("Numbers: " + JSON.stringify(element));
  console.log("Multiples of 5: " + JSON.stringify(multiple5(element)));
});

console.log("Completed Multiple of 5 testing");
console.log("Finished");
console.log("");