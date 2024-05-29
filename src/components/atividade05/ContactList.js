export default function ContactList({ selectedContact, contacts, onSelect }) {
    return (
        <section className="contact-list">
            <ul>
                {contacts.map(contact =>
                    <li key={contact.email} style={{listStyle: "none", padding: "2px"}}>
                        <button style={{width: "100%"}} class="btn btn-dark btn" onClick={() => {
                            onSelect(contact);
                        }}>
                            {contact.name}
                        </button>
                    </li>
                )}
            </ul>
        </section>
    );
}