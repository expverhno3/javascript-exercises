function getAge(person) {
    if (person.yearOfDeath) {
        return person.yearOfDeath - person.yearOfBirth
    } else {
        // let thisYear = new Date().getFullYear()
        // return thisYear - person.yearOfBirth
        return new Date().getFullYear() - person.yearOfBirth
    }
}


const findTheOldest = function(persons) {
    let oldestPerson = persons.reduce((oldestPerson, person) => {
        let oldAge = getAge(oldestPerson)
        let personAge = getAge(person)
        return oldAge < personAge ? person : oldestPerson
    })
    return oldestPerson
};

// Do not edit below this line
module.exports = findTheOldest;
