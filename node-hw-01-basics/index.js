const argv = require('yargs').argv;
const contactFunctions = require('./contacts.js')

// TODO:
function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case 'list':
      contactFunctions.listContacts()
      break;

    case 'get':
      contactFunctions.getContactById(id)
      break;

    case 'add':
      contactFunctions.addContact(name,email,phone)
      break;

    case 'remove':
      contactFunctions.removeContact(id)
      break;

    default:
      console.warn('\x1B[31m Unknown action type!');
  }
}

invokeAction(argv);