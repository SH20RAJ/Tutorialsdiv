## Generate Random String

### Use this function

```
function getrandomString(length) {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * 
 charactersLength));
   }
   return result;
}

console.log(getrandomString(5));//getrandomString function will return a string of length passed in it (5 here)

```

### Minified Version

```
function getrandomString(r){for(var t="",n="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",a=n.length,o=0;o<r;o++)t+=n.charAt(Math.floor(Math.random()*a));return t}
```

---

### Or Use This One Liner

if you will ever need a temporary unique id for something. this
one-liner will generate a random string for you

```
const randomString = Math.random().toString(36).slice(2);
console.log(randomString); //output- bg4v1vwslw4 (the string will be a random string )
```
