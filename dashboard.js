function selectTemplate(type){

    localStorage.setItem(
        "templateType",
        type
    );

    window.location.href =
        "builder.html";

}