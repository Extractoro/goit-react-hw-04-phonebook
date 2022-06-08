import { nanoid } from 'nanoid';
import { useState, useEffect } from 'react';
import ContactList from './ContactList';
import Container from './Container';
import Filter from './Filter';
import { Form } from './Form';
import Section from './Section';

const initialContacts = [
  { id: nanoid(), name: 'Rosie Simpson', number: '459-12-56' },
  { id: nanoid(), name: 'Hermione Kline', number: '443-89-12' },
  { id: nanoid(), name: 'Eden Clements', number: '645-17-79' },
  { id: nanoid(), name: 'Annie Copeland', number: '227-91-26' },
];

export const App = () => {
  const [filter, setFilter] = useState('');
  const [contacts, setContacts] = useState(
    localStorage.getItem('contactsList')
      ? JSON.parse(localStorage.getItem('contactsList'))
      : initialContacts
  );

  useEffect(() => {
    window.localStorage.setItem('contactsList', JSON.stringify(contacts));
  }, [contacts]);

  const deleteContact = contactId => {
    setContacts(prevState =>
      prevState.filter(contact => contact.id !== contactId)
    );
  };

  const addContact = ({ name, number }) => {
    const contact = {
      id: nanoid(),
      name,
      number,
    };
    setContacts(contacts => [contact, ...contacts]);
  };

  const onFilterInput = e => {
    setFilter(e.currentTarget.value);
  };

  const contactsFilter = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase().trim())
  );

  return (
    <Container>
      <Section title="Phonebook">
        <Form onSubmit={addContact} contactsList={contacts} />
      </Section>
      <Section title="Contacts">
        <Filter value={filter} onChange={onFilterInput} />
        <ContactList
          contacts={contactsFilter}
          onDeleteContact={deleteContact}
        />
      </Section>
    </Container>
  );
};

// export class jApp extends Component {
//   state = {
//     contacts: initialContacts
//     filter: '',
//   };

//   componentDidMount() {
//     const contacts = localStorage.getItem('contacts');
//     const parsedContacts = JSON.parse(contacts);

//     if (parsedContacts) {
//       this.setState({ contacts: parsedContacts });
//     }
//   }

//   componentDidUpdate(prevProps, prevState) {
// if (this.state.contacts !== prevState.contacts) {
//   localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
// }
//   }

// deleteContact = id => {
//   this.setState(prevState => ({
//     contacts: prevState.contacts.filter(contact => contact.id !== id),
//   }));
// };

// addContact = ({ name, number }) => {
//   const { contacts } = this.state;

//   const contact = {
//     id: nanoid(),
//     name,
//     number,
//   };
// };

// onFilterInput = e => {
//   this.setState({ filter: e.currentTarget.value });
// };

//   render() {
//     const { filter, contacts } = this.state;
// const contactsFilter = contacts.filter(contact =>
//   contact.name.toLowerCase().includes(filter.toLowerCase())
// );
//     return (
//       <Container>
//         <Section title="Phonebook">
//           <Form onSubmit={this.addContact} contactsList={contacts} />
//         </Section>
//         <Section title="Contacts">
//           <Filter value={filter} onChange={this.onFilterInput} />
//           <ContactList
//             contacts={contactsFilter}
//             onDeleteContact={this.deleteContact}
//           />
//         </Section>
//       </Container>
//     );
//   }
// }
