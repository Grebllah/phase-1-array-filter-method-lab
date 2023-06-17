// Code your solution here
function findMatching(names, match){
    return names.filter(name => name.toUpperCase() === match.toUpperCase())
}

// function fuzzyMatch(driver, str){
//     const answer = []
//     for (let i = 0; i < str.length; i++) {
//         for (let j = 0; j < driver.length; j++) {
//             if (str[i] === driver[j][0]){
//                 answer.push(driver[j])
//             }
//         }
//     }
//     return answer
// }

function fuzzyMatch(driver, str){
    let answer = [...str]
    return driver.filter(name => answer.includes(name[0]))
}

function matchName(driver, str){
    const answer = []
    for (const element of driver) {
        if (element.name === str) {
            answer.push(element)
        }
    }
    return answer
}