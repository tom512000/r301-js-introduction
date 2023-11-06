import * as introduction from "../src/introduction";

test("add 1 to 2 equals 3", () => {
  expect(introduction.add(1, 2)).toBe(3);
});

test("sub 1 to 2 equals 1", () => {
  expect(introduction.sub(1, 2)).toBe(1);
});

const names = [
  "add",
  "addIsAdultProperty",
  "addToAll",
  "adultFilter",
  "ageAverage",
  "average",
  "extractAge",
  "hasChild",
  "isAdult",
  "isAllAdult",
  "isChild",
  "sub",
  "sum",
];
test.each(Object.keys(introduction))(
    '"%s" is an expected function name',
    (name) => expect(names).toContain(name),
);

if (typeof introduction.sum === "function") {
  describe("sum", () => {
    test("sum of 1, 2 and 3 equals 6", () => {
      expect(introduction.sum([1, 2, 3])).toBe(6);
    });
    test("sum of an empty array equals 0", () => {
      expect(introduction.sum([])).toBe(0);
    });
  });
}

if (typeof introduction.addToAll === "function") {
  describe("addToAll", () => {
    test("add 2 to all : 1, 2 and 3 equals 3, 4, 5", () => {
      expect(introduction.addToAll([1, 2, 3], 2)).toEqual([3, 4, 5]);
    });
    test("return a new array", () => {
      const values = [1, 2];
      expect(introduction.addToAll(values)).not.toBe(values);
    });
  });
}

if (typeof introduction.average === "function") {
  describe("average", () => {
    test("of an empty array equals null", () => {
      expect(introduction.average([])).toBe(null);
    });
    test("of -1, 2 and 5 equals 2", () => {
      expect(introduction.average([-1, 2, 5])).toBe(2);
    });
  });
}

describe("user", () => {
  let child;
  let adult;
  if (
      typeof introduction.isAdult === "function" ||
      typeof introduction.isChild === "function"
  ) {
    beforeEach(() => {
      child = { age: 12 };
      adult = { age: 22 };
    });
  }

  if (typeof introduction.isAdult === "function") {
    test("Child user is not an adult", () => {
      expect(introduction.isAdult(child)).toBe(false);
    });
    test("Adult user is an adult", () => {
      expect(introduction.isAdult(adult)).toBe(true);
    });
  }
  if (typeof introduction.isChild === "function") {
    test("Child user is a child", () => {
      expect(introduction.isChild(child)).toBe(true);
    });
    test("Adult user is not a child", () => {
      expect(introduction.isChild(adult)).toBe(false);
    });
  }
});

describe("users", () => {
  let users;
  if (
      typeof introduction.extractAge === "function" ||
      typeof introduction.adultFilter === "function" ||
      typeof introduction.ageAverage === "function" ||
      typeof introduction.isAllAdult === "function" ||
      typeof introduction.hasChild === "function" ||
      typeof introduction.addIsAdultProperty === "function"
  ) {
    beforeEach(() => {
      users = [
        { age: 19, name: "Alice" },
        { age: 12, name: "Bob" },
        { age: 21, name: "Jim" },
        { age: 16, name: "John" },
        { age: 32, name: "Kelly" },
      ];
    });
  }

  if (typeof introduction.extractAge === "function") {
    describe("extract age", () => {
      test("Extract users age in a new array", () => {
        expect(introduction.extractAge(users)).not.toBe(users);
      });
      test("Extract users age return an array of users' age", () => {
        expect(introduction.extractAge(users)).toEqual([19, 12, 21, 16, 32]);
      });
    });
  }

  if (typeof introduction.adultFilter === "function") {
    describe("adultFilter", () => {
      test("filter without type return all data array", () => {
        expect(introduction.adultFilter(users)).toEqual(users);
      });
      test('filter with "child" return child users', () => {
        expect(introduction.adultFilter(users, "child")).toEqual([
          { age: 12, name: "Bob" },
          { age: 16, name: "John" },
        ]);
      });
      test('filter with "adult" return adult users', () => {
        expect(introduction.adultFilter(users, "adult")).toEqual([
          { age: 19, name: "Alice" },
          { age: 21, name: "Jim" },
          { age: 32, name: "Kelly" },
        ]);
      });
    });
  }

  if (typeof introduction.ageAverage === "function") {
    describe("ageAverage", () => {
      test("age average off all users is 20", () => {
        expect(introduction.ageAverage(users)).toBe(20);
      });
      test("age average off all users is 14", () => {
        expect(introduction.ageAverage(users, "child")).toBe(14);
      });
      test("age average off all users is 24", () => {
        expect(introduction.ageAverage(users, "adult")).toBe(24);
      });
    });
  }

  if (typeof introduction.isAllAdult === "function") {
    describe("isAllAdult", () => {
      test("users array with childs is not all adult", () => {
        expect(introduction.isAllAdult(users)).toBe(false);
      });
      test("users array with only adult is all adult", () => {
        const adults = [
          { age: 19, name: "Alice" },
          { age: 32, name: "Kelly" },
        ];
        expect(introduction.isAllAdult(adults)).toBe(true);
      });
    });
  }

  if (typeof introduction.hasChild === "function") {
    describe("hasChild", () => {
      test("users array with childs has child", () => {
        expect(introduction.hasChild(users)).toBe(true);
      });
      test("users array with only adult has no child", () => {
        const adults = [
          { age: 19, name: "Alice" },
          { age: 32, name: "Kelly" },
        ];
        expect(introduction.hasChild(adults)).toBe(false);
      });
    });
  }

  if (typeof introduction.addIsAdultProperty === "function") {
    describe("addIsAdultProperty", () => {
      beforeEach(() => {
        users = [
          { age: 12, name: "Bob" },
          { age: 21, name: "Jim" },
        ];
      });

      test("an isAdult property is added with correct value", () => {
        expect(introduction.addIsAdultProperty(users)).toEqual([
          { age: 12, name: "Bob", isAdult: false },
          { age: 21, name: "Jim", isAdult: true },
        ]);
      });
      test("the returned array is a new array", () => {
        expect(introduction.addIsAdultProperty(users)).not.toBe(users);
      });
      test("the returned array contains new objects", () => {
        expect(introduction.addIsAdultProperty(users)[0]).not.toBe(users[0]);
        expect(introduction.addIsAdultProperty(users)[1]).not.toBe(users[1]);
      });
    });
  }
});
