const {program} = require("commander");

const invokeActions = require("./contacts/invokeActions");

// invokeActions({action: "read"});
// invokeActions({action: "getById"});
// invokeActions({action: "add", name: "Kobe Bryant", email: "blcmamba@gmail.com", phone: "(242) 242-2424"});
// invokeActions({action: "deleteById", id: "YnHkLZjEXX-Q5HZMP6wF7"});


program
    .option("-a, --action, <type>")
    .option("-i, --id, <type>")
    .option("-n, --name, <type>")
    .option("-e, --email, <type>")
    .option("-p, --phone, <type>");

program.parse();

const options = program.opts();
invokeActions(options);


