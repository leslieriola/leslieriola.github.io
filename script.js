let tablinks = document.getElementsByClassName("tab-links");
let tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname) {
  for (tablink of tablinks) {
    tablink.classList.remove("active-link");
  }
  for (tabcontent of tabcontents) {
    tabcontent.classList.remove("active-tab");
  }
  event.currentTarget.classList.add("active-link");
  document.getElementById(tabname).classList.add("active-tab");
}

let sidemenu = document.getElementById("sidemenu");
function openmenu() {
  sidemenu.style.right = "0";
}
function closemenu() {
  sidemenu.style.right = "-200px";
}

const scriptURL =
  "https://script.google.com/macros/s/AKfycbwCFw4aLxm3l7igCBfUNOPGn78LxbhwFghEK2UiB4eTpFwNkOQm92nYE-lpdv5y3C2p/exec";
const form = document.forms["submit-to-google-sheet"];
const msg = document.getElementById("msg");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      msg.innerHTML = "Message Sent";
      setTimeout(function () {
        msg.innerHTML = "";
      }, 5000);
      form.reset();
    })
    .catch((error) => console.error("Error!", error.message));
});

// Using switch case for event handling
document.addEventListener("click", function (event) {
  switch (event.target.id) {
    case "tab1":
      opentab("tabcontent1");
      break;
    case "tab2":
      opentab("tabcontent2");
      break;
    case "tab3":
      opentab("tabcontent3");
      break;
    case "open-menu":
      openmenu();
      break;
    case "close-menu":
      closemenu();
      break;
    default:
      // Do nothing
      break;
  }
});
