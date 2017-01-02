function startApp() {
    $(function () {
        $('#btnLoad').click(loadContacts);
        $('#btnCreate').click(createContact);
    });
}