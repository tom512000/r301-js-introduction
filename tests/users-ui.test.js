/**
 * @jest-environment jsdom
 */
import { ageAverage } from "../src/introduction";
import * as usersUi from "../src/users-ui";

function innerTextPolyfill(elt) {
  if (elt.innerText) {
    elt.appendChild(document.createTextNode(elt.innerText));
  }
  return elt;
}

const names = [
  "createHtmlUser",
  "extractUser",
  "extractUsers",
  "extractUserType",
  "setUserEltCallbacks",
  "setAddUserEltCallback",
  "setAgeTypeEltEvents",
  "updateAgeAverage",
  "updateUserClassName",
];
test.each(Object.keys(usersUi))('"%s" is an expected function name', (name) =>
    expect(names).toContain(name),
);

if (typeof usersUi.createHtmlUser === "function") {
  describe("createHtmlUser", () => {
    const li = innerTextPolyfill(usersUi.createHtmlUser(12));

    test("return an HTMLElement", () => {
      expect(li instanceof HTMLElement).toBe(true);
    });

    test("returned element must be an li", () => {
      expect(li.nodeName).toBe("LI");
    });

    test("returned element must have a CSS class 'user'", () => {
      expect(li.classList.contains("user")).toBe(true);
    });

    if (li.innerHTML !== "12") {
      test("returned element must contains an element input[type='text'].input.user__name", () => {
        expect(
            li.querySelector(
                "input[type='text'].input.user__name, input.input.user__name",
            ),
        ).not.toBe(null);
      });

      test("returned element must contains an element input[type='number'].input.user__age", () => {
        expect(
            li.querySelector("input[type='number'].input.user__age"),
        ).not.toBe(null);
      });

      test("returned element must contains an element button[type='button'].button.user__delete", () => {
        expect(
            li.querySelector("input[type='number'].input.user__age"),
        ).not.toBe(null);
      });

      test("input[type='number'].input.user__age must contains given parameter", () => {
        expect(
            li.querySelector("input[type='number'].input.user__age").value,
        ).toBe("12");
      });
    }
  });
}

if (typeof usersUi.setAddUserEltCallback === "function") {
  describe("setAddUserEltCallback", () => {
    test("2 clicks must create 2 user items in HTML users container", () => {
      const usersElt = document.createElement("div");
      const addUserElt = document.createElement("button");
      usersUi.setAddUserEltCallback(addUserElt, usersElt);
      addUserElt.click();
      addUserElt.click();
      expect(usersElt.querySelectorAll("li.user").length).toBe(2);
    });
  });
}

if (typeof usersUi.extractUser === "function") {
  describe("extractUser", () => {
    test("return a user object from a user HTML element (li.user)", () => {
      document.body.innerHTML = `<ul>
      <li class="user"><input class="input user__name" value="Bob" /> - <input class="input user__age" type="number" value="42" /><button type="button" class="button user__delete"><span class="material-symbols-outlined">delete</span></button>
      <li class="user"><input class="input user__name" value="Jim" /> - <input class="input user__age" type="number" value="24" /><button type="button" class="button user__delete"><span class="material-symbols-outlined">delete</span></button>
    </ul>`;
      const usersElts = document.querySelectorAll("li.user");
      expect(usersUi.extractUser(usersElts[0])).toEqual({
        name: "Bob",
        age: 42,
      });
      expect(usersUi.extractUser(usersElts[1])).toEqual({
        name: "Jim",
        age: 24,
      });
    });
  });
}

if (typeof usersUi.extractUsers === "function") {
  describe("extractUsers", () => {
    test("return an array of users objects from the users HTML container (ul.users)", () => {
      document.body.innerHTML = `<ul class="users">
      <li class="user"><input class="input user__name" value="Bob" /> - <input class="input user__age" type="number" value="42" /><button type="button" class="button user__delete"><span class="material-symbols-outlined">delete</span></button>
      <li class="user"><input class="input user__name" value="Jim" /> - <input class="input user__age" type="number" value="24" /><button type="button" class="button user__delete"><span class="material-symbols-outlined">delete</span></button>
    </ul>`;
      const usersElt = document.querySelector("ul.users");
      expect(usersUi.extractUsers(usersElt)).toEqual([
        { name: "Bob", age: 42 },
        { name: "Jim", age: 24 },
      ]);
    });
  });
}

if (typeof usersUi.extractUserType === "function") {
  describe("extractUserType", () => {
    beforeEach(() => {
      document.body.innerHTML = `<article class="info">
        <form class="info__age-average-type">
          <label><input type="radio" name="type" value="" checked />all</label>
          <label><input type="radio" name="type" value="adult" />adult</label>
          <label><input type="radio" name="type" value="child" />child</label>
        </form>
        </article>
      `;
    });
    test("return an empty string by default", () => {
      const infoElt = document.querySelector(".info");
      expect(usersUi.extractUserType(infoElt)).toBe("");
    });
    test("return 'child' when the child radio button was clicked", () => {
      const infoElt = document.querySelector(".info");
      infoElt.querySelector("input[type='radio'][value='child']").click();
      expect(usersUi.extractUserType(infoElt)).toBe("child");
    });
  });
}

if (typeof usersUi.updateAgeAverage === "function") {
  describe("updateAgeAverage", () => {
    let usersElt;
    let infoElt;
    let ageAverageElt;
    beforeEach(() => {
      document.body.innerHTML = `
        <article class="info">
          <form class="info__age-average-type">
            <label><input type="radio" name="type" value="" checked />all</label>
            <label><input type="radio" name="type" value="adult" />adult</label>
            <label><input type="radio" name="type" value="child" />child</label>
          </form>
          <div class="info__user"><span class="info__age-average"><div>
        </article>
        <ul class="users">
          <li class="user"><input class="input user__name" value="Bob" /> - <input class="input user__age" type="number" value="42" /><button type="button" class="button user__delete"><span class="material-symbols-outlined">delete</span></button>
          <li class="user"><input class="input user__name" value="Jim" /> - <input class="input user__age" type="number" value="24" /><button type="button" class="button user__delete"><span class="material-symbols-outlined">delete</span></button>
        </ul>
      `;
      usersElt = document.querySelector("ul.users");
      infoElt = document.querySelector("article.info");
      ageAverageElt = infoElt.querySelector(".info__age-average");
    });
    test("age average element must be '33.00'", () => {
      usersUi.updateAgeAverage(usersElt, infoElt);
      expect(ageAverageElt.innerText).toBe("33.00");
    });
    test("when child radio was clicked age average element must be an empty string", () => {
      infoElt.querySelector("input[value='child']").click();
      usersUi.updateAgeAverage(usersElt, infoElt);
      expect(ageAverageElt.innerText).toBe("");
    });
    test("when adult radio was clicked age average element must be '33.00", () => {
      infoElt.querySelector("input[value='adult']").click();
      usersUi.updateAgeAverage(usersElt, infoElt);
      expect(ageAverageElt.innerText).toBe("33.00");
    });
  });
}

if (
    typeof usersUi.setAddUserEltCallback === "function" &&
    typeof usersUi.extractUsers === "function" &&
    typeof usersUi.setUserEltCallbacks === "function"
) {
  describe("setUserEltCallbacks", () => {
    let usersElt;
    let addUserElt;
    let infoElt;
    let users;
    beforeEach(() => {
      usersElt = document.createElement("div");
      addUserElt = document.createElement("button");
      infoElt = document.createElement("div");
      infoElt.innerHTML = `
      <form class="info__age-average-type">
        <label><input type="radio" name="type" value="" checked />all</label>
        <label><input type="radio" name="type" value="adult" />adult</label>
        <label><input type="radio" name="type" value="child" />child</label>
      </form>
      <span class="info__age-average">
    `;
      usersUi.setAddUserEltCallback(addUserElt, usersElt, infoElt);
      addUserElt.click();
      addUserElt.click();
      addUserElt.click();
      users = usersUi.extractUsers(usersElt);
    });
    test("click on delete user button must remove associated user HTML element", () => {
      users.splice(1, 1);
      usersElt
          .querySelector("li.user:nth-child(2) button.user__delete")
          .click();
      expect(usersUi.extractUsers(usersElt)).toEqual(users);
      expect(infoElt.querySelector(".info__age-average").innerText).toBe(
          parseFloat(ageAverage(users)).toFixed(2),
      );
    });
    test("change user age must update age average", () => {
      users[1].age += 2;
      const userElt = usersElt.querySelector(
          "li.user:nth-child(2) input.user__age",
      );
      userElt.value = parseInt(userElt.value, 10) + 2;
      userElt.dispatchEvent(new Event("change", { bubbles: true }));
      expect(usersUi.extractUsers(usersElt)).toEqual(users);
      expect(infoElt.querySelector(".info__age-average").innerText).toBe(
          parseFloat(ageAverage(users)).toFixed(2),
      );
    });
  });
}

if (typeof usersUi.setAgeTypeEltEvents === "function") {
  describe("setAgeTypeEltEvents", () => {
    let usersElt;
    let infoElt;
    beforeEach(() => {
      document.body.innerHTML = `
        <article class="info">
          <form class="info__age-average-type">
            <label><input type="radio" name="type" value="" checked />all</label>
            <label><input type="radio" name="type" value="adult" />adult</label>
            <label><input type="radio" name="type" value="child" />child</label>
          </form>
          <div class="info__user"><span class="info__age-average"><div>
        </article>
        <ul class="users">
          <li class="user"><input class="input user__name" value="Bob" /> - <input class="input user__age" type="number" value="42" /><button type="button" class="button user__delete"><span class="material-symbols-outlined">delete</span></button>
          <li class="user"><input class="input user__name" value="Joe" /> - <input class="input user__age" type="number" value="12" /><button type="button" class="button user__delete"><span class="material-symbols-outlined">delete</span></button>
          <li class="user"><input class="input user__name" value="Jim" /> - <input class="input user__age" type="number" value="24" /><button type="button" class="button user__delete"><span class="material-symbols-outlined">delete</span></button>
        </ul>
      `;
      usersElt = document.querySelector("ul.users");
      infoElt = document.querySelector("article.info");
      usersUi.setAgeTypeEltEvents(usersElt, infoElt);
    });
    test("age average element must be '26.00' for all type", () => {
      infoElt.querySelector("input[value='child']").click();
      infoElt.querySelector("input[value='']").click();
      expect(infoElt.querySelector(".info__age-average").innerText).toBe(
          "26.00",
      );
    });
    test("age average element must be '12.00' for child", () => {
      infoElt.querySelector("input[value='child']").click();
      expect(infoElt.querySelector(".info__age-average").innerText).toBe(
          "12.00",
      );
    });
    test("age average element must be '33.00' for adult", () => {
      infoElt.querySelector("input[value='adult']").click();
      expect(infoElt.querySelector(".info__age-average").innerText).toBe(
          "33.00",
      );
    });
  });
}
