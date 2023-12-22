import { ageAverage } from "./introduction";

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

export function setAddUserEltCallback(addUserElt, usersElt, infoElt) {
    addUserElt.addEventListener('click', () => {
        const newUser = createHtmlUser(Math.floor(Math.random() * (32 - 12) + 12));
        usersElt.appendChild(newUser);

        setUserEltCallbacks(newUser, usersElt, infoElt);
        updateUserClassName(newUser);
        
        if (infoElt)
            updateAgeAverage(usersElt, infoElt);
    });
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

export function extractUserType(infoElt) {
    const liste = Array.from(infoElt.querySelector('.info__age-average-type').querySelectorAll('label'));
  
    for (let i = 0; i < liste.length; i++) {
      if (liste[i].querySelector('input').checked)
        return liste[i].querySelector('input').value;
    }
}

export function updateAgeAverage(usersElt, infoElt) {
    const moyenne = ageAverage(extractUsers(usersElt), extractUserType(infoElt));
  
    if (moyenne)
      infoElt.querySelector('.info__age-average').innerText = Number.parseFloat(moyenne).toFixed(2);
    else
      infoElt.querySelector('.info__age-average').innerText = '';
}

export function setUserEltCallbacks(userElt, usersElt, infoElt) {
    userElt.querySelector('.user__delete').addEventListener('click', () => {
        userElt.remove();
        updateAgeAverage(usersElt, infoElt);
    });
  
    userElt.addEventListener("change", (event) => {
        updateAgeAverage(usersElt, infoElt);
        updateUserClassName(userElt);
    });

    updateUserClassName(userElt);
}

export function setAgeTypeEltEvents(usersElt, infoElt) {
    infoElt.addEventListener("change", (event) => {
        updateAgeAverage(usersElt, infoElt);
    });
}

export function updateUserClassName(userElt) {
    const ageInput = userElt.querySelector('.user__age');
    const isChild = parseInt(ageInput.value, 10) < 18;

    if (isChild)
        userElt.classList.add('user--child');
    else
        userElt.classList.remove('user--child');
}
