function createAnagrams(words) {
    const anagrams = {};
    words.forEach((item) => {
        const sortedWord = item.split('').sort().join('');
        if (anagrams[sortedWord]) {
            anagrams[sortedWord].push(item);
        } else {
            anagrams[sortedWord] = [item];
        }
    });
    return anagrams;
}

function groupAnagrams(words) {

    const groups = [];
    const distribute = createAnagrams(words);

    for (const sortedWord in distribute) {
        groups.push(distribute[sortedWord]);
    }

    return groups;
}

const words = ["rat", "tar", "star"];

console.log(groupAnagrams(words));