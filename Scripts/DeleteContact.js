function deleteContact(key) {
    let delRequest = {
        method: "DELETE",
        url: "https://phonebook-bff44.firebaseio.com/phonebook/"+ key + ".json"
    };
    $.ajax(delRequest)
        .then(loadContacts)
        .catch(displayError);
}