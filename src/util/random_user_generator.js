
let users = []

function generateUsers(userCount) {
    let ab = []
    for (let i = 0; i < 26; i++) {
        ab.push(String.fromCharCode(97 + i));
    }

    const getRandName = (first, second) => {
        let name = '';
        for (let i = 0; i < first; i++) {
            name += ab[Math.floor(Math.random() * ab.length)];
        }
        name += ' '
        for (let i = 0; i < second; i++) {
            name += ab[Math.floor(Math.random() * ab.length)]
        }
        return name
    }

    const getRandInt = (len) => {
        return Math.floor(Math.random() * len + 4)
    }

    for (let i = 0; i < userCount; i++) {
        const user = {
            'id': i + 1,
            'name': getRandName(getRandInt(6), getRandInt(6)),
            'age': Math.floor(Math.random() * 30) + 20
        }
        console.log(user);
    }
}

generateUsers(10);