// Check how many cubes need to be used given the volume of building.
function findNb(m) {
    let n = 0;
    while( m > 0) {
        n ++
        const cubes = Math.pow(n, 3);
        m = m - cubes;

    } if (m <= 0) {return -1}
    console.log(n);
    return n
}

findNb()