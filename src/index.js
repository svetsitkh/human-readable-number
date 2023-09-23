module.exports = function toReadable(number) {

    const numberStr = number.toString();
    const numberLength = numberStr.length;
    let result = '';

    for (let i = numberLength - 1; i >= 0; i -= 1) {
        const currentDigit = numberStr[i];

        if (i == numberLength - 1) {
            result = oneDigit(currentDigit);
        } else if (i == numberLength - 2) {
            if (currentDigit == '1') {
                result = from10to19(currentDigit + numberStr[i + 1]);
            } else if (currentDigit == '0') {
                // result doesn't change for hundreds
                result = (result !== 'zero') ? result : '';
            } else {
                result = from20to90(currentDigit + '0') + ((result !== 'zero') ? (' ' + result) : '');
            }
        } else if (i == numberLength -3) {
            result = oneDigit(currentDigit) + ' hundred' + ((result == '') ? '' : ' ' + result);
        }
    }

    return result;
}

const oneDigit = (digit) => {
    switch (digit) {
        case '0':
            return 'zero';
        case '1':
            return 'one';
        case '2':
            return 'two';
        case '3':
            return 'three';
        case '4':
            return 'four';
        case '5':
            return 'five';
        case '6':
            return 'six';
        case '7':
            return 'seven';
        case '8':
            return 'eight';
        case '9':
            return 'nine';
        default:
            return '';
    }
}

const from10to19 = (digits) => {
    switch (digits) {
        case '10':
            return 'ten';
        case '11':
            return 'eleven';
        case '12':
            return 'twelve';
        case '13':
            return 'thirteen';
        case '14':
            return 'fourteen';
        case '15':
            return 'fifteen';
        case '16':
            return 'sixteen';
        case '17':
            return 'seventeen';
        case '18':
            return 'eighteen';
        case '19':
            return 'nineteen';
        default:
            return '';
    }
}

const from20to90 = (digits) => {
    switch (digits) {
        case '20':
            return 'twenty';
        case '30':
            return 'thirty';
        case '40':
            return 'forty';
        case '50':
            return 'fifty';
        case '60':
            return 'sixty';
        case '70':
            return 'seventy';
        case '80':
            return 'eighty';
        case '90':
            return 'ninety';
        default:
            return '';
    }
}