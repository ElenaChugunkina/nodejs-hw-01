import { PATH_DB } from '../constants/contacts.js';


import fs from 'node:fs/promises';


export const removeAllContacts = async () => {
    try {
    
      await fs.writeFile(PATH_DB, JSON.stringify({ contacts: [] }, null, 2));
      console.log('All contacts have been removed.');
    } catch (error) {
      console.error('Error removing contacts:', error);
    }
  };
  removeAllContacts();
