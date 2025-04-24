const users = require('./users.js');

const usersFilter = (specialty) => {
    const specialtyUsers = users.filter(user => user.specialty === specialty);
    return specialtyUsers;
}

const getUsersBySpecialty = (specialty) => {
    const usersList = usersFilter(specialty);
    const template = `
        <h1>Usuarios de ${specialty}</h1>
        <p>Lista de los ${usersList.length} usuarios de ${specialty}: </p>`
        + usersList.map(user => `<p>${user.name}, ${user.age} años</p>`).join('')
    
    return template;
}
module.exports = getUsersBySpecialty;