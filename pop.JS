let contacts = [
    {
        id: 1,
        name: "Mona Abdo",
        phone: "(202) 555-5555",
        email: "mona@example.com",
        gender: "female"
    },
    {
        id: 2,
        name: "Karim Ali",
        phone: "(202) 444-4444",
        email: "karim@example.com",
        gender: "male"
    },
    {
        id: 3,
        name: "Mohamed Sami",
        phone: "(202) 333-3333",
        email: "mohamed@example.com",
        gender: "male"
    },
    {
        id: 4,
        name: "Eman Ali",
        phone: "(202) 222-2222",
        email: "eman@example.com",
        gender: "female"
    }
];function renderContacts() {
    const list = $("#contact-list");
    list.empty();

    contacts.forEach(c => {
        list.append(`
            <li data-id="${c.id}">
                <a href="#details" class="contact-link">
                <img src="images/download.jpg">
                    <h2>${c.name}</h2>
                    <p>${c.phone}</p>
                </a>
                <a href="tel:${c.phone}" class="ui-btn ui-icon-phone ui-btn-icon-notext">Call</a>
            </li>
        `);
    });

    list.listview("refresh");
}

$(document).on("pagebeforeshow", "#home", renderContacts);

$(document).on("click", ".contact-link", function () {
    const id = $(this).closest("li").data("id");
    const c = contacts.find(x => x.id === id);
    currentContactId = id;

    $("#details-name").text(c.name);
    $("#detail-phone").text(c.phone);
    $("#detail-email").text(c.email || "-");

    $("#edit-name").val(c.name);
    $("#edit-phone").val(c.phone);
    $("#edit-email").val(c.email);
});

$(document).on("click", "#save-btn", function (e) {
    e.preventDefault();

    const name = $("#name").val();
    const phone = $("#phone").val();
    const email = $("#add-email").val();
    const gender = $("input[name='gender']:checked").val();

    if (!name || !phone || !gender) {
        alert("Fill all fields");
        return;
    }

    contacts.push({
        id: Date.now(),
        name, phone, email, gender
    });

    $("#name, #phone, #add-email").val("");
    $("input[name='gender']").prop("checked", false).checkboxradio("refresh");

    $.mobile.changePage("#home");
});

$(document).on("pagebeforeshow", "#edit-contact", function () {
    if (!currentContactId) {
        $.mobile.changePage("#home");
        return;
    }
    
    const c = contacts.find(x => x.id === currentContactId);
    if (!c) return;

    $("#edit-name").val(c.name);
    $("#edit-phone").val(c.phone);
    $("#edit-email").val(c.email || "");
    
    $("input[name='edit-gender']").prop("checked", false);
    if (c.gender === "male") {
        $("#edit-gender-male").prop("checked", true);
    } else {
        $("#edit-gender-female").prop("checked", true);
    }
    
    $("input[name='edit-gender']").checkboxradio("refresh");
});

$(document).on("click", "#update-btn", function (e) {
    e.preventDefault();

    const c = contacts.find(x => x.id === currentContactId);
    if (!c) return;

    const newName = $("#edit-name").val().trim();
    const newPhone = $("#edit-phone").val().trim();
    const newEmail = $("#edit-email").val().trim();
    const newGender = $("input[name='edit-gender']:checked").val();

    if (!newName || !newPhone || !newGender) {
        alert("Please fill all required fields");
        return;
    }

    c.name = newName;
    c.phone = newPhone;
    c.email = newEmail;
    c.gender = newGender;

    $("#details-name").text(c.name);
    $("#detail-phone").text(c.phone);
    $("#detail-phone-link").attr("href", "tel:" + c.phone.replace(/[^\d+]/g, ''));
    $("#detail-email").text(c.email || "No email");
    $("#detail-email-link").attr("href", "mailto:" + (c.email || ""));
        const genderIcon = c.gender === "male" ? "👨" : "👩";
    const genderText = c.gender === "male" ? "Male" : "Female";
    $("#detail-gender-icon").text(genderIcon);
    $("#detail-gender").text(genderText);
    renderContacts();
    $.mobile.changePage("#details", { reverse: true});
});

$(document).on("click", "#delete-confirm-btn", function () {
    contacts = contacts.filter(c => c.id !== currentContactId);
    currentContactId = null;
    $.mobile.changePage("#home");
});