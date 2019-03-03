
function nextItem(xs, item) {
    // TODO: Implement me

    var a = xs.indexOf(item) + 1

    if (a === xs.length) {
        return undefined;
    }

    else if (!xs.includes(item)) {
        return undefined;
    }

    else {
        return (xs[a]);
    }

}

console.log(nextItem([2, 4, 3], 3)) //item+1 does not exist
console.log(nextItem([3, 2, 1], 2)) //item+1 is in the list
console.log(nextItem([3, 2, 7], 3)) //item+1 is in the list
console.log(nextItem([1, 1, 1], 10)) //item (and therefore item+1) not in the list

