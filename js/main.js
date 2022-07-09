
// (function(){

//    console.log(1);
//    setTimeout(function(){

//        console.log(3);
//    }, 2000);

//    setTimeout(function(){

//     console.log(4)
//    }, 0);

//    console.log(2)
// })();


// var symbol1 = Symbol();
// console.log(symbol1);
// var symbol2 = Symbol();
// console.log(symbol2);
// console.log(symbol1 === symbol2)

// var names = Symbol.for("Ahsan");

// const object = {

//     [names] : 'My object',
//     fullName : 'Shibu',
//     job : 'Student'
// }

// for(let keys in object){
//     console.log(keys)
// }
// console.log(object)

// const btn = document.getElementById('btn');

// const person = {

//     name : 'Ahsanul Huq',
//     birthYear : function (){

//         console.log(this)
//     }
// }

// btn.addEventListener('click',  person.birthYear)

// let iroman = {

//     power : 80,
//     getPower (){

//        return this.power
//     }
// }

// let getPower = iroman.getPower;
// console.log(typeof getPower());

// let thor = {

//     power : 100
// }

// console.log(getPower());
// console.log(getPower.apply(thor))


// const title = document.querySelector("#title");
// const author = document.querySelector("#author");
// const year = document.querySelector("#year");
// const btn = document.querySelector("#btn");
// const bookList = document.querySelector("#book-list");

// btn.addEventListener("click", function (e) {
//   e.preventDefault();

//   if(title.value == '' && author.value == '' && year.value == ''){

//     alert('Vai apni kicu ekta den!')
//   }else{

//     console.log('Hello')
//   }

// });

// let promise = new Promise(function(resolve, reject){

//       resolve(10);
// });

// promise.then(function(value){

//     value++
//     console.log(value)
//     return value
// });
// promise.then(function(value){

//     value = value + 10;
//     console.log(value);
//     return value;
// });
// promise.then((value) => {

//     value = value + 20;
//     console.log(value);
//     return value;
// })

// const fistInput = document.getElementById('fistInput');
// const secondInput = document.getElementById('secondInput');
// const result = document.getElementById('result');
// const resultShow = document.getElementById('resultShow');

// result.addEventListener('click', function(e) {

//      e.preventDefault();
//     const fistInputPaseInt = parseInt(fistInput.value);
//     const secondInputPaseInt = parseInt(secondInput.value);

//      if(fistInputPaseInt === '' && secondInputPaseInt == ''){

//        console.log('Hello world')
//      }else{

//            for (let i = 1; i <= secondInputPaseInt; i++) {
//             const result = i * fistInputPaseInt;
//             const second = i ;

//             createElement(fistInputPaseInt, second, result)
//        }
    
      
//    }    
// });

// function createElement(tdOne, tdTwo, tdThree){
     
//      const tr = document.createElement('tr');
//      const td1 = document.createElement('td');
//      const td2 = document.createElement('td');
//      const td3 = document.createElement('td');

//      const td1Value = document.createTextNode(tdOne);
//      const td2Value = document.createTextNode(tdTwo);
//      const td3Value = document.createTextNode(tdThree);
     
//      td1.appendChild(td1Value);
//      td2.appendChild(td2Value);
//      td3.appendChild(td3Value);

//     tr.appendChild(td1);
//     tr.appendChild(td2);
//     tr.appendChild(td3);

//     resultShow.append(tr)
    

// } 

// function newWord(str){

//      let newWord = '';

//      for(let i = 2 ; i < str.length; i++){

//           newWord += str[i];
//      }

//     return newWord; 

// }
// console.log(newWord('object'))

// let myArr = [1, 2, 3, 4, 5];

// let myNewArr = [];

// for(let i = 0; i < myArr.length; i++){

   

//     if(myArr[i] % 2 === 0){

//        myNewArr.push(myArr[i])

      
//     }

   
// }

// console.log(myNewArr);

// function newArray (arr) {

//    return [arr[0], arr[arr.length - 1]];

// }

// var myArr = [1, 2, 3, 4, 5, 10, 12, 158, 1254];
// console.log(newArray(myArr))

// function myArray(arr){

//     let newArray = [];

//     newArray.push(arr[0], arr[arr.length - 1]);
   
//     return newArray;
// }

// console.log(myArray(['Shibu', 'Ahsan', 'Huq']));

// function myArr(arr){

//     let newArray = [];
//     let firstArray = arr[0];
//     let secondArray = arr[arr.length - 1];
     
//     return newArray += [firstArray, secondArray]
// }

// console.log(myArr(['shibu', 'ahsan', 'huq', 'shibu']));

// let one = 1;

// function func(){

//     one  = 2;
//     return function(){

//         console.log(one)
//     }
// }

// one = 3;
// func()()


// function reverseArray(arr){

    //  let newArray = [];

    //  for(let i = 0; i > arr.length; i++){

    //     newArray = newArray[arr[arr.length -1]];
    //  }

//     return arr.forEach((value, index) => {

//    arr[arr.length - 1 - index]
        
//    })

    



//    return arr.map((item,idx) => arr[arr.length-1-idx])
// }

// console.log(reverseArray(myArray));

// console.log(myArray)

// let myArray = [ 5, 7, 8, 9, 4, 10, 1, 2, 5, 0];

// function arrReverse(arr){

//     let newArray = [];

//     for(let i = 0; i < arr.length; i++){

//         newArray[i] = arr[arr.length - i - 1];
//     }

//     return newArray;
// }

// console.log(arrReverse(myArray));
// console.log(myArray);