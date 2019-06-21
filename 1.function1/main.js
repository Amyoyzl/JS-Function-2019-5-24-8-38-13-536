function reverseString(message){
    let str = "";
    for(let i = message.length - 1; i >= 0; i--) {
        str += message.charAt(i);
    }
    return str;
}
reverseString('hello');