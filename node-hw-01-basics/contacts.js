const path = require('path');
const fs = require('fs/promises');
const { wrap } = require('yargs');

const contactsPath = path.resolve('./db/contacts.json');

async function listContacts() {
    try {
        const all = await fs.readFile(contactsPath, 'utf8')
        console.table(JSON.parse(all))
    } catch (err) {
        throw err
    }
}

async function getContactById(contactId) {
    try {
        const all = await fs.readFile(contactsPath, 'utf8')
        // console.log(all)
        const contacts=JSON.parse(all)
        const contactById=contacts.find((contact) => contact.id===contactId)
        console.log(contactById)
    } catch(err) {
        throw err
  }
}

async function removeContact(contactId) {
    try {
        const all = await fs.readFile(contactsPath, 'utf8')
        const contacts = JSON.parse(all)
        const filteredContacts = contacts.filter((contact) => contact.id !== contactId)
        console.table(filteredContacts)
        await fs.writeFile(contactsPath,JSON.stringify( filteredContacts,null,2), { encoding: 'utf8' })
    } catch (err) {
        throw err
  }
}

async function addContact( name, email, phone ) {
    try {
        const newContact = { name, email, phone }
        // console.log(newContact)
        const all = await fs.readFile(contactsPath, 'utf8')
        const contacts = JSON.parse(all)
        // console.log(contacts)
        const listWithAddedContact = [...contacts,newContact ]
        console.table(listWithAddedContact)
        await fs.writeFile(contactsPath,JSON.stringify(listWithAddedContact,null,2),{encoding:'utf8'})
    } catch (err) {
        throw err
  }
}
module.exports={listContacts,getContactById,removeContact,addContact}