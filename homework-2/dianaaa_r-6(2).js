function landPerimeter(arr) {
    let perimeter = 0;
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {

            if (arr[i][j] === 'X') {
                perimeter += 4;

                if (j < arr[i].length - 1) {
                    if (arr[i][j + 1] === 'X') {
                        perimeter -= 2;
                    }
                }

                if (i < (arr.length - 1)) {
                    if (arr[i + 1][j] === 'X') {
                        perimeter -= 2;
                    }
                }
            }
        }
    }
    return `Total land perimeter: ${perimeter}`;
}