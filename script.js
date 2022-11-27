//*********************Day-4 Task : First Question *****************************************************************/
// const obj1={
//     name:"Person 1",
//     age: 5
//     }
    
// const obj2={
//     age: 5,
//     name:"Person 1"    
//     }


// _.isEqual(obj1, obj2);
// // => true


//*********************Day-4 Task : Second Question *****************************************************************/
var request = new XMLHttpRequest();
console.log(request);
request.open("GET", "https://restcountries.com/v3.1/all")
request.send()
request.onload = function() {
    var data = request.response 
    var result = JSON.parse(data)
    for(var pr of result) {
        console.log(pr.flags)
    }

//*********************Day-4 Task : Third Question *****************************************************************/

//    for loop
    for(var i=0; i<result.length; i++) {
        console.log(result[i].name.common, result[i].region, result[i].subregion, result[i].population)
        
    }
}

//*********************Day-4 Task : Question End*****************************************************************/