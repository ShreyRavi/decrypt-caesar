module.exports = function decryptCaesar(encryptedString, alphabet=null) {
    if (!alphabet) {
    	alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    }
    return [...Array(alphabet.length + 1)].map((_,idx) => [...encryptedString].map(c => {
        if (c === ' ') { // ignore spaces
            return ' ';
        }
        let result = alphabet[(alphabet.indexOf(c.toLowerCase()) + idx) % alphabet.length];
        if (c === c.toUpperCase()) { // upper case
            result = result.toUpperCase();
        }
        return result;
    }).join('')).reverse().slice(0,-1);
};