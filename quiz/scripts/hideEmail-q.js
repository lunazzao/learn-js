/* anonymizes the username(local part) of an email ID, that is, 
replace the username part with * characters.
*/
const emails = [
  "mary@northeastern.edu",
  "ari@khoury.northeastern.edu",
  "jk_neu.edu",
  "jk@neu.edu",
  "jsned@",
  "ai_me@mugar.northeastern.edu",
];
window.onload = function hideEmail() {
  const list = document.getElementById("emails");
  list.innerHTML = "";
  for (const email of emails) {
    // complete the loop
    if (isValid(email)) {
      console.log(email);
      //split[0].replace('*')
      const listEmail = document.createElement("li");
      listEmail.textContent =
        email.slice(0, email.indexOf("@")).replace(/./g, "*") +
        email.slice(email.indexOf("@"));
      list.appendChild(listEmail);
    }
  }
};

function isValid(email) {
  return /^[a-zA-Z0-9_]+@(.+\.)*northeastern.edu$/.test(email);
}
