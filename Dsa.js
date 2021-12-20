// Solution of Problem one....one way.....looping...time complexity..n*n

const same = (arr1, arr2) => {
    if (arr1.length !== arr2.length) return console.log(false);
    for (let i = 0; i < arr1.length; i++) {
        let correctIndex = arr2.indexOf(arr1[i] ** 2);
        if (correctIndex === -1) {
            return console.log(false);
        }
        // arr2.splice(correctIndex, 1);
    }
    return console.log(true);

}


same([1, 2, 3, 17], [289, 4, 1, 9])