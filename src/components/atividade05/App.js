import { useState } from "react";
import ContactList from "./ContactList";
import Chat from "./Chat";

export default function Messenger() {
    const [to, setTo] = useState(contacts[0]);
    return (
        <div className="row">
            <h2>E-mail</h2>
            <div className="col-sm-3">
                <ContactList
                    contacts={contacts}
                    selectedContact={to}
                    onSelect={contact => setTo(contact)}
                />
            </div>
            <div className="col-sm-6">
                <Chat contact={to} />
            </div>
        </div>
    );
}

const contacts = [
    { name: 'Taylor', email: 'taylor@mail.com' },
    { name: 'Alice', email: 'alice@mail.com' },
    { name: 'Bob', email: 'bob@mail.com' }
];