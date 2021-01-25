type FetchCallback = (data: string) => void;

function fetchData(cb?: FetchCallback): Promise<string> {
  return new Promise((resolve) => {
    setTimeout(() => {
      cb && cb("peanut butter");
      resolve("peanut butter");
    }, 2000);
  });
}

test("the data is peanut butter", (done) => {
  function callback(data: string): void {
    try {
      expect(data).toBe("peanut butter");
      done();
    } catch (error) {
      done(error);
    }
  }

  fetchData(callback);
});

test("the data is peanut butter", () => {
  return fetchData().then((data: string) => {
    expect(data).toBe("peanut butter");
  });
});

test("the data is peanut butter", () => {
  return expect(fetchData()).resolves.toBe("peanut butter");
});

test("the data is peanut butter", async () => {
  const data = await fetchData();
  expect(data).toBe("peanut butter");
});

function throwError(): Promise<Error> {
  return new Promise((resolve, reject) => {
    reject("error");
  });
}

test("fails with an error", () => {
  expect.assertions(1);
  return throwError().catch((error) => expect(error).toMatch("error"));
});

test("fails witn an error", () => {
  return expect(throwError()).rejects.toMatch("error");
});

test("fails with an error", async () => {
  expect.assertions(1);
  try {
    await throwError();
  } catch (error) {
    expect(error).toMatch("error");
  }
});
