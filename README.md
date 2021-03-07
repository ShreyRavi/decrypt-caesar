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
```
Unencrypted: "Caesar Cipher Unencrypted" with shift of 3,

Thus, the _third_ element of resulting array is the correct decrypted result.
```
decryptCaesar("Fdhvdu Flskhu Xqhqfubswhg") => [
    0:  Fdhvdu Flskhu Xqhqfubswhg,
    1:  Ecguct Ekrjgt Wpgpetarvgf,
    2:  Dbftbs Djqifs Vofodszqufe,
    3:  Caesar Cipher Unencrypted,
    4:  Bzdrzq Bhogdq Tmdmbqxosdc,
    5:  Aycqyp Agnfcp Slclapwnrcb,
    6:  Zxbpxo Zfmebo Rkbkzovmqba,
    7:  Ywaown Yeldan Qjajynulpaz,
    8:  Xvznvm Xdkczm Pizixmtkozy,
    9:  Wuymul Wcjbyl Ohyhwlsjnyx,
    10: Vtxltk Vbiaxk Ngxgvkrimxw,
    11: Uswksj Uahzwj Mfwfujqhlwv,
    12: Trvjri Tzgyvi Levetipgkvu,
    13: Squiqh Syfxuh Kdudshofjut,
    14: Rpthpg Rxewtg Jctcrgneits,
    15: Qosgof Qwdvsf Ibsbqfmdhsr,
    16: Pnrfne Pvcure Harapelcgrq,
    17: Omqemd Oubtqd Gzqzodkbfqp,
    18: Nlpdlc Ntaspc Fypyncjaepo,
    19: Mkockb Mszrob Exoxmbizdon,
    20: Ljnbja Lryqna Dwnwlahycnm,
    21: Kimaiz Kqxpmz Cvmvkzgxbml,
    22: Jhlzhy Jpwoly Bulujyfwalk,
    23: Igkygx Iovnkx Atktixevzkj,
    24: Hfjxfw Hnumjw Zsjshwduyji,
    25: Geiwev Gmtliv Yrirgvctxih
]
```
Index of result in array is equal to shift of Caesar cipher.

If shift is known, then just index result with shift value:
```
const shift = 3; // known shift
decryptCaesar("Fdhvdu Flskhu Xqhqfubswhg")[shift] => "Caesar Cipher Unencrypted"
```

## License
MIT License. Open Source. Contact [author](mailto:shrey@shreyravi.com) with any concerns.