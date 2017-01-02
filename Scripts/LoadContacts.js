function loadContacts() {
    $('#phonebook').empty();
    $.get("https://phonebook-bff44.firebaseio.com/phonebook.json")
        .then(displayContacts)
        .catch(displayError);
}