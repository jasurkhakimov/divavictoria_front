
// Convertion ot Roman nums

// function convertToRoman(num) {
//     let rounded = [1000, 100, 10, 1];
//     let res = [];
//     rounded.forEach(n => {
//         console.log(num % n);
//         if (num % n !== num) {
//             let rem = num % n;
//             res.push(num - rem);
//             num = rem;
//         }
//     })

//     let roman_alph = {
//         1: 'I',
//         2: 'II',
//         3: 'III',
//         4: 'IV',
//         5: 'V',
//         6: 'VI',
//         7: 'VII',
//         8: 'VIII',
//         9: 'IX',
//         10: 'X',
//         20: 'XX',
//         30: 'XXX',
//         40: 'XL',
//         50: 'L',
//         60: 'LX',
//         70: 'LXX',
//         80: 'LXXX',
//         90: 'XC',
//         100: 'C',
//         200: 'CC',
//         300: 'CCC',
//         400: 'CD',
//         500: 'D',
//         600: 'DC',
//         700: 'DCC',
//         800: 'DCCC',
//         900: 'CM',
//         1000: 'M',
//     }

//     let res_str = '';

//     Object.keys(roman_alph).reverse().forEach(rom_key => {
//         // console.log(res, rom_key, res.includes(Number(rom_key)));
//         // console.log(res.some(item => item / rom_key < 10));
//         if (res.includes(rom_key) || res.some(item => item / rom_key < 10)) {

//             res.forEach(item => {
//                 if (Object.keys(roman_alph).includes(String(item))) {
//                     if (item == rom_key) {
//                         res_str = res_str.concat(roman_alph[item])
//                     }
//                 } else {
//                     if (rom_key == 1000) {
//                         for(let i = 0; i < item / rom_key; i++) {
//                             res_str = res_str.concat(roman_alph[rom_key]);
//                         }
//                         console.log('result - ', res_str);
//                     }
//                 }
//             })
//         }
//     })


//     return res_str;
// }

// get_alphabet

function get_alphabet() {
    let alpha = [];
    for (let i = 65; i < 65 + 26; i++) {
        alpha.push(String.fromCharCode(i));

    }
    return alpha;
}

// Caesars Cipher
// function rot13(str) {
//     let alpha = get_alphabet();
//     console.log(alpha);

//     let shift_13_letters = (letter) => {
//         let index_of_letter = alpha.indexOf(letter);
//         let index_of_shifted_letter = index_of_letter + 13;

//         if (index_of_shifted_letter >= alpha.length) {
//             index_of_shifted_letter = index_of_shifted_letter - alpha.length;
//         }

//         return alpha[index_of_shifted_letter];
//     }

//     let res = str.split('').map(item => {
//         let regex = /[A-Z]/;
//         if (regex.test(item)) {
//             return shift_13_letters(item);
//         }
//         return item;
//     })


//     console.log(res);

//     return res.join('');
// }

// console.log(rot13('SERR PBQR PNZC'));


function checkCashRegister(price, cash, cid) {
    var currency_obj = {
        'PENNY': 0.01,
        'NICKEL': 0.05,
        'DIME': 0.1,
        'QUARTER': 0.25,
        'ONE': 1,
        'FIVE': 5,
        'TEN': 10,
        'TWENTY': 20,
        'ONE HUNDRED': 100,
    };

    
    Object.keys(currency_obj).reverse().forEach(item => {
        
    })


    return currency_obj;
}

console.log(checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]));


