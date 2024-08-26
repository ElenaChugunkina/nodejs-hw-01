import createFakeContact from '../utils/createFakeContact.js';

import getAllContacts from './getAllContacts.js';

import updateContacts from './updateContacts.js';

const addOneContact = async () => {
	const contactList = await getAllContacts();
	const newContactList = createFakeContact();
	contactList.push(newContactList);
	
	await updateContacts(contactList);
};

addOneContact();

