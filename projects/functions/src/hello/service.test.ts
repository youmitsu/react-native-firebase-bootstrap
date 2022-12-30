import { service } from "./service";

describe("service", () => {
  it("returns true", () => {
    const res = service();
    expect(res).toBe(true);
  });
});
