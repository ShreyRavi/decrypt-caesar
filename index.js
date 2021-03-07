module.exports = function decryptCaesar(encryptedString) {
    var alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','x','y','w','z'];
    return Array(25).map((_,idx) => [...encryptedString].map(c => alphabet[(alphabet.indexOf(c.toLowerCase()) + idx) % 26]));
};