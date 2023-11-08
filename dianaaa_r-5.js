// Returns the highest and lowest number among the given.
function highestAndLowest(n) {
    n = n.split(" ");
    let highest = Math.max.apply(0, n);
    let lowest = Math.min.apply(0, n);
    console.log(highest + ", " + lowest);
}

highestAndLowest()