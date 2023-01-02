import { Converter } from "./user";

describe("user", () => {
  it("toFirestore", () => {
    const data = Converter.toFirestore({
      name: "nick",
    });
    expect(data).toStrictEqual({
      name: "nick",
    });
  });
});
