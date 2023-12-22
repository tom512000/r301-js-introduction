export function createHtmlUser(age) {
    const liElt = document.createElement("li");
    liElt.className = "user";

    const nameUser = document.createElement("input");
    nameUser.className = "input user__name";
    nameUser.type = "text";
    nameUser.value = "name";
    liElt.appendChild(nameUser);

    liElt.append(" - ");

    const ageUser = document.createElement("input");
    ageUser.className = "input user__age";
    ageUser.type = "number";
    ageUser.value = age;
    ageUser.min = "1";
    liElt.appendChild(ageUser);

    const DeleteButton = document.createElement("button");
    DeleteButton.className = "user__delete";
    DeleteButton.type = "button";
    liElt.appendChild(DeleteButton);

    const spanButton = document.createElement("span");
    spanButton.className = "material-symbols-outlined";
    spanButton.innerHTML = "delete";
    DeleteButton.appendChild(spanButton);

    return liElt;
}

export function setAddUserEltCallback(addUserElt, usersElt) {
    addUserElt.addEventListener('click', () => { usersElt.appendChild(createHtmlUser(Math.floor(Math.random() * (32 - 12) + 12))) });
}

export function extractUser(userElt) {
    let user = {};
    user.name = userElt.querySelector("input.input.user__name").value;
    user.age = parseInt(userElt.querySelector("input.input.user__age").value);

    return user;
}

export function extractUsers(usersElt) {
    const liste = [];
    const users = Array.from(usersElt.querySelectorAll('li'));
    
    for (let i = 0; i < users.length; i++) {
        liste.push(extractUser(users[i]))
    }

    return liste;
}
