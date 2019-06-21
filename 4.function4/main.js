function countWords(message){
    let arr = message.split(' ');
    return arr.length;
}
countWords('Good morning, I love JavaScript.'); // should return 5