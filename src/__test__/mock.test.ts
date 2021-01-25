function forEach<T>(items: Array<T>, callback: (arg: T) => T): void {
  for (let index = 0; index < items.length; index++) {
    callback(items[index]);
  }
}

test("forEach test", () => {
  const mockCallback = jest.fn((x: number): number => 42 + x);
  forEach<number>([0, 1], mockCallback);

  expect(mockCallback.mock.calls.length).toBe(2);
  expect(mockCallback.mock.calls[0][0]).toBe(0);
  expect(mockCallback.mock.calls[1][0]).toBe(1);
  expect(mockCallback.mock.results[0].value).toBe(42);
});
