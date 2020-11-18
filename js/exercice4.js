let moduleCalculator = (function () {

    let total = 0

    function add(number) {
        validateNumber(number)
        total += number
    }

    function remove(number) {
        validateNumber(number)
        total -= number
    }

    function multiply(number) {
        validateNumber(number)
        total *= number
    }

    function divide(number) {
        validateNumber(number)
        total /= number
    }

    function getTotal() {
        return total
    }

    function validateNumber(number) {
        if (typeof number !== 'number') {
            throw new Error('Le valeur ' + number + ' n\'est pas un nombre !')
        }
    }

    return {
        add: add,
        remove: remove,
        multiply: multiply,
        divide: divide,
        getResult: getTotal,
    }

})()

moduleCalculator.add(2) // 0+2
moduleCalculator.add(3) // 2+3
moduleCalculator.remove(10) // 5-10
moduleCalculator.multiply(5) // -5*5
moduleCalculator.add(30) // -25+30
moduleCalculator.divide(2) // 5/2

console.log(moduleCalculator.getResult())