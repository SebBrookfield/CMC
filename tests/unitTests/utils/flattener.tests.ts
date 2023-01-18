import { flatten } from "../../../src/utils/flattener"

describe("flattener tests", () => {
  it("flattens objects correctly", () => {
    const obj = {
      prop1: 123,
      prop2: {
        prop3: "data",
        prop4: 789,
        prop5: {
          prop6: "deep",
        },
      },
    }

    const flattened = flatten(obj)
    expect(flattened).toEqual({
      prop1: 123,
      "prop2.prop3": "data",
      "prop2.prop4": 789,
      "prop2.prop5.prop6": "deep",
    })
  })

  it("flattens arrays correctly", () => {
    const obj = {
      prop1: [1, 2, 3],
      prop2: ["4", "5", "6"],
      prop3: {
        prop4: ["a", "b", "c"],
      },
    }

    const flattened = flatten(obj)
    expect(flattened).toEqual({
      prop1: "[1,2,3]",
      prop2: '["4","5","6"]',
      "prop3.prop4": '["a","b","c"]',
    })
  })
})
