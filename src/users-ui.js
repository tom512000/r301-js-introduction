export function createHtmlUser(age) {
    const liElt = document.createElement("li");
    liElt.className = "user";
    liElt.innerHTML = age;
    return liElt;
}
