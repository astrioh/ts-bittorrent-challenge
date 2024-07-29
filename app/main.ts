import { BencodedList } from "./types";

function decodeBencode(bencodedValue: string): string | number | BencodedList {
    if (bencodedValue[0] === 'i' &&  bencodedValue[bencodedValue.length - 1] === 'e') {
        return parseBencodedInteger(bencodedValue);
    }

    if (bencodedValue[0] === 'l' &&  bencodedValue[bencodedValue.length - 1] === 'e') {
        return parseBencodedList(bencodedValue);
    }

    if (!isNaN(parseInt(bencodedValue[0]))) {
        return parseBencodedString(bencodedValue)
    }

    throw new Error("Invalid encoded value");
}

// Examples: 5:hello -> "hello", 10:helloworld -> "helloworld"
function parseBencodedString(value: string): string {
    const firstColonIndex = value.indexOf(":");

    if (firstColonIndex === -1) {
        throw new Error("Invalid encoded value");
    }

    return value.substring(firstColonIndex + 1);
}

// Examples: i42e -> 42, i-655e -> -655
function parseBencodedInteger(value: string): number {
    return parseInt(value.substring(1, value.length - 1))
}

// Examples: l5:helloi52ee -> [“hello”,52]
function parseBencodedList(value: string): BencodedList {
    const result: BencodedList = [];

    let currentIndex: number = 1;

    while (currentIndex < value.length - 1) {
        console.log(currentIndex);
        
        const currentValue = getFirstBencodedValue(value.substring(currentIndex));
        console.log(currentValue);
        result.push(decodeBencode(currentValue));
        currentIndex += currentValue.length;
    }

    return result;
}

function getFirstBencodedValue(value: string): string {
    let valueLength = 0;
    if (!isNaN(parseInt(value[0]))) {
        const stringLength = Number(value.split(':')[0]);

        if (!stringLength) {
            throw new Error("Invalid encoded value");
        }

        valueLength = stringLength.toString().length + stringLength + 1;
    } else if (value[0] === 'l') {
        let index = 1;
        while (value[index] !== 'e') {
            console.log('sliced', value.slice(1 + valueLength))
            const firstItem = getFirstBencodedValue(value.slice(1 + valueLength));
            index += firstItem.length;
            valueLength += firstItem.length;
        }

        // add type and end chars
        valueLength += 2;
    } else {
        valueLength = value.indexOf('e') + 1;
    }

    if (!valueLength) {
        throw new Error("Invalid encoded value");
    }

    return value.substring(0, valueLength);
}

const args = process.argv;
const bencodedValue = args[3];

if (args[2] === "decode") {
    try {
        const decoded = decodeBencode(bencodedValue);
        console.log(JSON.stringify(decoded));
    } catch (error) {
        if (error instanceof Error) {
            console.error(error.message);
        }
    }
}
