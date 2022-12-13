export function sum(num1, num2){
    return num1 + num2;
}

export function exp(base, exponent){
    return base ** exponent;
}


export function round(value, precision) {
    let multiplier = exp(10, precision || 0);
    return Math.round(value * multiplier) / multiplier;
}

// exp { sum, round} pode ser utilizado dessa forma o export