export function fizzBuzz(number: number): string {
    let result = "";

    const numberAsString = number.toString();

    // Fizz : divisible par 3 ou contient le chiffre 3
    if (number % 3 === 0 || numberAsString.includes("3")) {
        result += "Fizz";
    }

    // Buzz : divisible par 5 ou contient le chiffre 5
    if (number % 5 === 0) {
        result += "Buzz";
    }

    if (numberAsString.includes("5")) {
        result += "Buzz";
    }

    // Si aucune règle n'est respectée
    return result || numberAsString;
}



