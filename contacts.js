const { readFile, writeFile } = require('fs/promises');
const path = require('path');


const contactsPath = path.join(__dirname, './db/contacts.json');


const listContacts = async() =>{ 
    const listContactsString = await readFile(contactsPath, 'utf8')
    const listContactsArr = JSON.parse(listContactsString)
    return listContactsArr;
}     
  
const getContactById = async (contactId) => {
    const allContact = await listContacts();
    const contactById = allContact.find(contact =>contact.id.toString() === contactId)
    return contactById?contactById:null;
}

const removeContact = async(contactId) =>{
    const allContact = await listContacts();
    const filterContacts = await allContact.filter(({id}) => {return (id.toString() !== contactId)})
    await writeFile(contactsPath, JSON.stringify(filterContacts));
}
try {
console.log('Contact was deleted successfully!')
} catch (error) {
    console.log(error)
}


  
const addContact = async(name, email, phone) => {
    const allContact = await listContacts();
    const newContact = {id: allContact.length+1, name, email, phone }
    allContact.push(newContact);
    await writeFile(contactsPath, JSON.stringify(allContact));
    return allContact;
}


    const contacts = {
    contactsPath,
    listContacts,
    getContactById,
    removeContact,
    addContact
  }

  module.exports = contacts



