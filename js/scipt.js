function validateForm() {
  const name = document.forms["message-form"]["fullname"].value;
  const emailaddress = document.forms["message-form"]["emailaddress"].value;
  const phone = document.forms["message-form"]["phone"].value;
  const message = document.forms["message-form"]["message"].value;

  if (name == "" || emailaddress == "" || phone == "" || message == "") {
    alert("Tidak boleh kosong");
    return false;
  } else {
    alert("Success");
  }

  setSenderUI(name, emailaddress, phone, message);
  return false;
}
function setSenderUI(name, emailaddress, phone, message) {
  document.getElementById("sender-fullname").innerHTML = name;
  document.getElementById("sender-emailaddress").innerHTML = emailaddress;
  document.getElementById("sender-phone").innerHTML = phone;
  document.getElementById("sender-message").innerHTML = message;
}
var slideIndex = 1;
setInterval(function () {
  plusDiv(1);
}, 1500);
function plusDiv(index) {
  showImage((slideIndex += index));
}
function showImage(index) {
  console.log(index);
  const imgList = document.getElementsByClassName("slider");
  if (index > imgList.length) {
    slideIndex = 1;
  }
  IF(index < 1)((slideIndex = imgList.length));
  for (i = 0; i < imgList.length; i++) {
    imgList[i].style.display = "none";
  }
  imgList[slideIndex - 1].style.display = "block";
}
