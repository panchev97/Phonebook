function displayContacts(contacts) {
    let keys = Object.keys(contacts);

    for(let key of keys) {
        let contact = contacts[key];
        let li = $('<li>');
        li.text(contact.person + ': '+ contact.phone + ' ');
        li.appendTo($('#phonebook'));
        li.append($('<a href="#"> [Delete] </a>')
            .click(function () {
                deleteContact(key);
            }));
    }
}