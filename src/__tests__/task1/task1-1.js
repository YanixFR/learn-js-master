import { revertString } from "../../task_1//task1-1";

describe("tests for revertString function", () => {
  it("should reverse string", () => expect(revertString("abc")).toBe("cba"));
});