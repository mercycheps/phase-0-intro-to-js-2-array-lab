const cats = ["Milo", "Otis", "Garfield"];


function destructivelyAppendCat(cat) {
    cats.push(cat)
}
function destructivelyPrependCat(cat) {
    cats.unshift(cat)
}
 function destructivelyRemoveFirstCat(){
    cats.shift()
 }
 function destructivelyRemoveLastCat() {
    cats.pop()
 }

 function appendCat(cat) {
    return cats.concat([cat])
 }
 function prependCat(cat) {
    return [cat].concat(cats)
 }
function removeLastCat() {
    return cats.slice(0,cats.length - 1)


}
function  removeFirstCat () {
    return cats.slice(1, cats.length)
}


