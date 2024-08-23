 import { PATH_DB } from '../constants/contacts.js';
 import fs from 'node:fs/promises';
import createFakeContact from '../utils/createFakeContact.js';

import getAllContacts from './getAllContacts.js';


const generateContacts = async (number) => {
    
    const contactsList = await getAllContacts();
    const newContactList = Array(number).fill(0).map(createFakeContact);
    contactsList.push(...newContactList);
    
    await fs.writeFile(PATH_DB, JSON.stringify(contactsList, null, 2));
   
    
    };
    



generateContacts(5);


