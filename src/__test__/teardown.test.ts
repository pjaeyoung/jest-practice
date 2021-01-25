function initialzeCityDatabase() {
  console.log("initialize city database");
}
function clearCityDatabase() {
  console.log("clear city database");
}

beforeEach(() => initialzeCityDatabase());

afterEach(() => clearCityDatabase());

const cities = new Set(["Vienna", "San Juan"]);

function isCity(city: string): boolean {
  return cities.has(city);
}

test("city database has Vienna", () => {
  expect(isCity("Vienna")).toBeTruthy();
});

test("city database has San Juan", () => {
  expect(isCity("San Juan")).toBeTruthy();
});

describe("matching cities to foods", () => {
  function initializeFoodDatabase() {
    console.log("initialize food database");
  }

  beforeEach(() => initializeFoodDatabase());

  const cityFoodPairs = new Map([
    ["Vienna", "Wiener Schnitzel"],
    ["San Juan", "Mofongo"],
  ]);

  function isValidCityFoodPair(city: string, food: string): boolean {
    return cityFoodPairs.get(city) === food;
  }

  test("Vienna <3 sausage", () => {
    expect(isValidCityFoodPair("Vienna", "Wiener Schnitzel")).toBe(true);
  });

  test("San Juan <3 plantains", () => {
    expect(isValidCityFoodPair("San Juan", "Mofongo")).toBe(true);
  });
});
