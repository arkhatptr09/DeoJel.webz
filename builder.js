const titleInput =
document.getElementById("title");

const messageInput =
document.getElementById("message");

const previewTitle =
document.getElementById("previewTitle");

const previewMessage =
document.getElementById("previewMessage");

titleInput.addEventListener(
    "input",
    () =>{
        previewTitle.textContent =
        titleInput.value;
    }
);

messageInput.addEventListener(
    "input",
    () =>{
        previewMessage.textContent =
        messageInput.value;
    }
);

document
.getElementById("saveBtn")
.addEventListener("click", () => {

    const uniqueLink =
    "https://loveweb.id/view/" +
    Math.random()
    .toString(36)
    .substring(2,9);

    alert(
        "Website berhasil dibuat\n\n" +
        uniqueLink +
        "\n\n📧 Jangan lupa cek email akunmu untuk melihat respon penerima."
    );

});