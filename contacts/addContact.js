const {nanoid} = require("nanoid");
const listContacts = require("./listContacts");
const contactsPath = require("./contactsPath");
const fs = require('fs/promises');

const addContact = async(data) => {
    const contacts = await listContacts();
    const newContact = {
        id: nanoid(),
        ...data
    }
    contacts.push(newContact);

    await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));
    return newContact;
}

module.exports = addContact;
