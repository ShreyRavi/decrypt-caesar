# @shreyravi/decrypt-caesar
[![npm (scoped)](https://img.shields.io/npm/v/@shreyravi/decrypt-caesar.svg)](https://www.npmjs.com/package/@shreyravi/decrypt-caesar)
[![npm bundle size (minified)](https://img.shields.io/bundlephobia/min/@shreyravi/decrypt-caesar.svg)](https://www.npmjs.com/package/@shreyravi/decrypt-caesar)

A package to help decrypt Caesar shift cipher-encrypted strings with an unknown shift value.

## Install
```
$ npm install @shreyravi/decrypt-caesar
```

## Usage
```
const decryptCaesar = require("@shreyravi/decrypt-caesar");

decryptCaesar("Fdhvdu Flskhu Xqhqfubswhg");
// Unencrypted: "Caesar Cipher Unencrypted" with shift of 3
// Thus, third element of resulting array is the correct decrypted result
//decryptCaesar("Fdhvdu Flskhu Xqhqfubswhg")=> _[
    Fdhvdu Flskhu Xqhqfubswhg
    Ecguct Ekrjgt Wpgpetarvgf
    Dbftbs Djqifs Vofodszqufe
    Caesar Cipher Unencrypted
    Bzdrzq Bhogdq Tmdmbqxosdc
    Aycqyp Agnfcp Slclapwnrcb
    Zxbpxo Zfmebo Rkbkzovmqba
    Ywaown Yeldan Qjajynulpaz
    Xvznvm Xdkczm Pizixmtkozy
    Wuymul Wcjbyl Ohyhwlsjnyx
    Vtxltk Vbiaxk Ngxgvkrimxw
    Uswksj Uahzwj Mfwfujqhlwv
    Trvjri Tzgyvi Levetipgkvu
    Squiqh Syfxuh Kdudshofjut
    Rpthpg Rxewtg Jctcrgneits
    Qosgof Qwdvsf Ibsbqfmdhsr
    Pnrfne Pvcure Harapelcgrq
    Omqemd Oubtqd Gzqzodkbfqp
    Nlpdlc Ntaspc Fypyncjaepo
    Mkockb Mszrob Exoxmbizdon
    Ljnbja Lryqna Dwnwlahycnm
    Kimaiz Kqxpmz Cvmvkzgxbml
    Jhlzhy Jpwoly Bulujyfwalk
    Igkygx Iovnkx Atktixevzkj
    Hfjxfw Hnumjw Zsjshwduyji
    Geiwev Gmtliv Yrirgvctxih
]_
// Index of result in array = shift of Caesar cipher
```

## License
MIT License. Open Source. Contact [author](mailto:shrey@shreyravi.com) for any questions.