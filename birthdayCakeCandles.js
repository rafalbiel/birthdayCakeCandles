let candles = [1, 4, 5, 3, 4];
function birthdayCakeCandles(candles) {
    let max = 0;
    function arrayMax(candles) {   
        for (let i = 0; i < candles.length; i++) {
            if (candles[i] > max) {
                max = candles[i];
            }
        }
        return max;
    }
    max = arrayMax(candles);
    console.log(max);
    let counter = 0;
    candles.forEach(function (element) {
        if (element === max) {
            counter = counter + 1;
        }
    });
    return counter;
}
console.log(birthdayCakeCandles(candles));
