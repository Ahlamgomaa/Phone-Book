$(document).ready(function() {
    var selectedItem; 

    $(document).on("click", "#contact-list li a", function() {
        selectedItem = $(this).closest("li");
        var name = $(this).find("h2").text();
        var img = $(this).find("img").attr("src");
        var phone = $(this).next('a').attr('href').replace('tel:', '');

        $("#details-name").text(name);
        $("#details-img").attr("src", img);
        $("#details h1").text(name);
        
        $("#edit-name").val(name);
        $("#edit-phone").val(phone);
    });

    $(document).on("click", "#update-btn", function() {
        var updatedName = $("#edit-name").val();
        var updatedPhone = $("#edit-phone").val();

        if (updatedName !== "" && updatedPhone !== "") {
            selectedItem.find("h2").text(updatedName);
            selectedItem.find("a.ui-icon-phone").attr("href", "tel:" + updatedPhone);
            
            $("#details-name").text(updatedName);
            $("#details h1").text(updatedName);

            $(":mobile-pagecontainer").pagecontainer("change", "#details");
        }
    });

    $(document).on("click", "#delete-confirm-btn", function() {
        if (selectedItem) {
            selectedItem.remove(); 
            $("#contact-list").listview("refresh"); 
            $(":mobile-pagecontainer").pagecontainer("change", "#home"); 
        }
    });

    $(document).on("click", "#save-btn", function() {
        var newName = $("#name").val();
        var newPhone = $("#phone").val();
        
        if(newName === "" || newPhone === "") {
            alert("Please fill name and phone");
            return;
        }

        var newItem = `
            <li>
                <a href="#details">
                    <img src="images/download.jpg">
                    <h2>${newName}</h2>
                </a>
                <a href="tel:${newPhone}" class="ui-btn ui-icon-phone ui-btn-icon-notext">Call</a>
            </li>`;

        $("#contact-list").append(newItem);
        $("#contact-list").listview("refresh"); 
        
        $("#name").val("");
        $("#phone").val("");
        $(":mobile-pagecontainer").pagecontainer("change", "#home");
    });
});