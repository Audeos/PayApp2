export function getPositiveNumeric(text: string) {
    return text.replace(/[^0-9.]+/g, '').replace(/(?<=\..*)\./g, '');
}

export function getOnlyWords(text: string) {
    return text.replace(/[^a-zA-Z .]+/g, '');
}

export function getOnlyNumbers(text: string) {
    return text.replace(/[^0-9]+/g, '');
}


export function ibanFormatter(iban: string) {
    let output = '';
    for (let i = 0; i < iban.length; i++) {
        if (i !== 0 && i % 4 === 0) {
            output += ` ${iban[i]}`;
        } else {
            output += iban[i];
        }
    }
    return output;
}
