function VigenèreCipher(key, abc) {

    let vigenere = []

    for(let i = 0; i < abc.length; i++) {
        const row = abc.split('')
        for(let j = 0; j < i; j++) {
            row.push(row.shift())
        }
        vigenere.push(row)
    }

    this.encode = function (str) {
        let encoded = '';
        let key_arr = key.split('');
        while (key_arr.length < str.length) {
            key_arr = key_arr.concat(key_arr);
        }


        str = str.split('')

        for (let i = 0; i < str.length; i++) {
            let digit = str[i];
            let each_key = key_arr[i];

            if (abc.includes(digit)) {
                let line = abc.indexOf(each_key)
                let column = abc.indexOf(digit)
                let place = vigenere[line][column]
                encoded += place

            }
            else {
                encoded += digit;

            }

        }
        return encoded
    };

    this.decode = function (str) {
        let decoded = '';
        let key_arr = key.split('');
        while (key_arr.length < str.length) {
            key_arr = key_arr.concat(key_arr);
        }
        for (let i = 0; i < str.length; i++) {
            let cipher = str[i];
            let each_key = key_arr[i];
            if(abc.includes(cipher)) {
                let line = abc.indexOf(each_key)
                let row = vigenere[line]
                let column = row.indexOf(cipher)
                let place = abc[column]
                decoded += place

            }
            else {
                decoded += cipher
            }
        }
        return decoded
    };
}