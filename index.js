let counter = 0;

try {
    function increment(num){
        counter = num + 1;
        increment(counter);
    }
    increment(counter);
} catch (error) {
    console.log(counter);
    console.log(error);
}

