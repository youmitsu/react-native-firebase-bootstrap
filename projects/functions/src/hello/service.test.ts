import { service } from "./service";

describe.skip("service", () => {
  it("returns true", () => {
    const res = service();
    expect(res).toBe(true);
  });
});
