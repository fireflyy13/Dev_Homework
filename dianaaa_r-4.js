function unpackSausages(truck) {
    const ifEqual = arr => {

        if (arr.length === 0) {
            return false;
        }

        return arr.every(val => val == arr[0]);
    };

    let normal = [];
    let reward_counter = 0;

    for (let box of truck) {
        if (Array.isArray(box) && box.length > 0 && typeof box !== "undefined" &&
            box !== null &&
            box.length !== null) {
            for (let pack of box) {
                if (typeof pack === 'string' && pack.indexOf("[") > -1 &&
                    pack.indexOf("]") > -1 && pack !== null &&
                    pack.length !== null) {

                    const sausages = pack.match(/\[(.*?)\]/g);

                    if (sausages) {
                        for (const sausagePack of sausages) {

                            const clean_pack = sausagePack.replace(/[\[\]]/g, '') //

                            if (clean_pack.length === 4 && ifEqual(clean_pack.split(''))) {
                                normal.push(clean_pack.split('').join(' '));

                                reward_counter++;

                                if (reward_counter % 5 === 0) {
                                    normal.pop();
                                }
                            }
                        }
                    }
                }
            }
        }
    }
    return normal.join(' ');
}

// Example usage:
const truck = [
    [ "(-)", "[IIII]", "[))))]" ],
    [ "IuI", "[llll]" ],
    [ "[@@@@]", "UwU", "[IlII]" ],
    [ "IuI", "[))))]", "x" ],
    []
];
const result = unpackSausages(truck);
console.log(result);