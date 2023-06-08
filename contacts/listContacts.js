const fs = require('fs/promises');
const contactsPath = require('./contactsPath');

const listContacts = async() => {
    const text = await fs.readFile(contactsPath);
    return JSON.parse(text);
}

module.exports = listContacts;