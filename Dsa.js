// Solution of Problem one....one way.....looping...time complexity..n*n

// const same = (arr1, arr2) => {
//     if (arr1.length !== arr2.length) return console.log(false);
//     for (let i = 0; i < arr1.length; i++) {
//         let correctIndex = arr2.indexOf(arr1[i] ** 2);
//         if (correctIndex === -1) {
//             return console.log(false);
//         }
//         console.log(arr2);
//         arr2.splice(correctIndex, 1);
//     }
//     return console.log(true);

// }


// Another way...Frequency Counter Pattern...


const same = (arr1, arr2) => {
    if (arr1.length !== arr2.length) return console.log(false);
    let frequencyCounter1 = {};
    let frequencyCounter2 = {};
    for (let val of arr1) {
        frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;

    }

    for (let val of arr2) {
        frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;

    }

    for (let key in frequencyCounter1) {
        // console.log(key);
        if (!(key ** 2 in frequencyCounter2)) {
            return console.log(false);
        }
        console.log(frequencyCounter1[key ** 2]);

        // console.log(frequencyCounter1[key]);
        // console.log(frequencyCounter2[key**2]);
        if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
            return console.log(false);
        }
    }
    // console.log(frequencyCounter1);
    // console.log(frequencyCounter2);
    return console.log(true);
}





same([1, 2, 2, 3, 17], [289, 4, 4, 1, 9])