/*  function getParameterByName(name, url = window.location.href) {
    name = name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}*/

//Content of Script.js
let p1 = new URL(document.currentScript.src);
params = p1.searchParams;
console.log(params.get('name'));

document.write(params.get('name')+" - "+params.get('age'))