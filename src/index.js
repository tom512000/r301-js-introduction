import { setAddUserEltCallback, setAgeTypeEltEvents } from "./users-ui";

const addUserButton = document.querySelector("button.user-data__add");
const usersList = document.querySelector("ul.users");
const infoElement = document.querySelector(".info");

setAddUserEltCallback(addUserButton, usersList, infoElement);
setAgeTypeEltEvents(usersList, infoElement);
