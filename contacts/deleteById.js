const contactsPath = require("./contactsPath");
const listContacts = require("./listContacts")
const fs = require('fs/promises');

const deleteById = async(id) => {
    const contacts = await listContacts();
    const index = contacts.findIndex(item => item.id === id);
    if(index === -1) {
        return null;
    }

    const [result] = contacts.splice(index, 1);
    await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));
    return result;
}

module.exports = deleteById;