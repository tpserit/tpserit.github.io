info_card = document.getElementsByClassName("info-card");
// if (document.getElementById('info-text')) {
//     info_text = self.innerText;
// } else {
//     info_text = "";
// }
info_text = document.getElementById("info-text");


if (info_text.innerText == "") {
    info_card[0].style.display = "none";
} else {
    info_card[0].style.display = "flex";
};