function createContact() {
    let person = $('#txtPerson').val();
    let phone = $('#txtPhone').val();

    let newContact = { person, phone };

    let createRequest = {
        method: "POST",
        url: "https://phonebook-bff44.firebaseio.com/phonebook/" + ".json",
        data: JSON.stringify(newContact)
    };

    $.ajax(createRequest)
        .then(loadContacts)
        .catch(displayError);

}