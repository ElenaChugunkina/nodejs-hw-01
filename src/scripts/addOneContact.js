import { PATH_DB } from '../constants/contacts.js';
import createFakeContact from '../utils/createFakeContact.js';
import fs from 'node:fs/promises';
import getAllContacts from './getAllContacts.js';

export const addOneContact = async () => {
    const contactsList = await getAllContacts();
    const newContact = createFakeContact();
    contactsList.push(newContact);
    await fs.writeFile(PATH_DB, JSON.stringify(contactsList, null, 2));
};

addOneContact();
