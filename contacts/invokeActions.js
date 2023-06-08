const contacts = require(".")

const invokeActions = async ({action, id, name, email, phone}) => {
    switch(action) {
        case "read":
            const allContacts = await contacts.listContacts();
            return console.log(allContacts);
        case "getById":
            const result = await contacts.getById(id);
            return console.log(result)
        case "add":
            const newContact = await contacts.addContact({name, email, phone});
            return console.log(newContact);
        case "deleteById":
            const deleteBook = await contacts.deleteById(id);
            return console.log(deleteBook);
        default:
            return console.log("Unknown command");
    }
}

module.exports = invokeActions;