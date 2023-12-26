const findTheOldest = function(people) {
    let personWithGreatestAge; 
    let greatestAge = 0; 
    
    for (let i = 0; i < people.length; i++) { 
        const person = people[i]; 
        const currentYear = new Date().getFullYear();
        let age; 
        
        if (person.yearOfDeath) {
            age = person.yearOfDeath - person.yearOfBirth; 
        } else { 
            age = currentYear - person.yearOfBirth; 
        }; 
        
        if (age > greatestAge) { 
            greatestAge = age; 
            personWithGreatestAge = person; 
        }; 
    }; 
    
    return personWithGreatestAge;
};



// Do not edit below this line
module.exports = findTheOldest;
