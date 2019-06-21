function palindrome(message){
    for(let i = 0; i < message.length / 2; i++) {
        if(message.charAt(i) != message.charAt(message.length-i-1))
            return false;
    }
    return true;
}
palindrome('hello'); // should return false
palindrome('abcba'); // should return true