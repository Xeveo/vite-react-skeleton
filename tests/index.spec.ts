import { foo } from "../src/index";

describe("Skeleton Index", () => {
  describe("foo", () => {
    it('should equal "bar"', () => {
      expect(foo).toEqual("bar");
    });
  });
});
