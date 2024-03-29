// iterative version 
const fibs = (num) => {
    const sequence = [0, 1]; 
    if (num < 2) return sequence.slice(0, num); 

    while (num > 2) {
        const newNumber = sequence.at(-1) + sequence.at(-2);
        sequence.push(newNumber); 
        num--; 
    }
    return sequence; 
}

// recursive version 
const fibsRec = (num, sequence = [0, 1]) => {
    if (sequence.length >= num) {
        return sequence.slice(0, num); 
    }

    const newNumber = sequence.at(-1) + sequence.at(-2);
    sequence.push(newNumber); 
    return fibsRec(num, sequence); 
}

console.log(fibs(0));
console.log(fibs(1)); 
console.log(fibs(8)); 

console.log(fibsRec(0)); 
console.log(fibs(1));
console.log(fibs(8)); 