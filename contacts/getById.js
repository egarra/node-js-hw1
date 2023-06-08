const listContacts = require("./listContacts")

const getById = async (id) => {
    const contacts = await listContacts();
    const result = contacts.find(item => item.id === id);
    return result || null;
}

module.exports = getById;