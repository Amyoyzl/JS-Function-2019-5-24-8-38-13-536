function alphabetSort(message){
    let arr = message.split("");
    for(let i = 0; i < arr.length; i++) {
        let temp = arr[i];
        for(let j = 0; j < arr.length; j++) {
            if(temp < arr[j]) {
                arr[i] = arr[j];
                arr[j] = temp;
                temp = arr[i];
            }
        }
    }
    return arr.join("");
}
alphabetSort('hello'); // should return 'ehllo'