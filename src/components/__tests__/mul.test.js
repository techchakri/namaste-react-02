import { mul } from "../mul";

test("Mul function should calculate the Mul of two numbers", () => {

    const result = mul(3,4);

    // Assertion
    expect(result).toBe(12);

});