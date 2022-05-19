const fs = require('fs').promises;
const { readFile, writeFile } = require('fs');
const path = require('path')

const contactsPath = path.join(__dirname, './db/contacts.json');


function listContacts() {  
    readFile(contactsPath, (err, data) => {    
        if (err) { console.log(err.message) }
        console.log (JSON.parse(data))
    })
}
  
  function getContactById(contactId) {
    // contact.map(data => {console.table(data[contactId])}
//   )
}
  
  function removeContact(contactId) {
    // const arr = contact.filter((data) => `${data.id}` !== contactId)
    // fs.writeFile(
    //   `${contactsPath}`,
    //   `${JSON.stringify(arr, null, 4)}`,
    //   (error) => {
    //     if (error) {
    //       console.log(error)
    //       return
    //     }
    //     fs.readFile(`${contactsPath}`, 'utf8', (error, data) => {
    //       if (error) {
    //         console.log(error)
    //         return
    //       }
    //       const obj = JSON.parse(data)
    //       console.table(obj)
    //     })
    //   }
    // )
  }
  
  function addContact(name, email, phone) {
    readFile(contactsPath,  (err, data) => {
           if (err) { console.log(err.message) }
               const contacts = JSON.parse(data)
               const contactsNew = {id: contacts.length+1, name, email, phone }
               const contactsList = JSON.stringify([ ...contacts, contactsNew], null, '\t')
   
               writeFile(contactsPath, contactsList, (err) => { if (err) console.error(err) })
       })
     }
     try {
       addContact()
     } catch (error) {
       next(error)
     }

    const contacts = {
    contactsPath,
    listContacts,
    getContactById,
    removeContact,
    addContact
  }

  module.exports = contacts
  
//   addContact('Nina', 'dfg@gmail.com', '09999999')
// listContacts()
// removeContact(9)
// getContactById(1)/