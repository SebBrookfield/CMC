import { createSqsEvent } from "../../../utils/sqsUtils"
import { SQSEvent } from "aws-lambda"
import { handleMessage } from "../../../../src/utils/sqs"

describe("handleMessage tests", () => {
  it("throws error if there are no records", () => {
    const event: SQSEvent = { Records: [] }
    expect(() => handleMessage(event)).toThrow("No records in event.")
  })

  it("throws error if there are multiple records", () => {
    const event: SQSEvent = createSqsEvent({})
    event.Records.push(...event.Records)
    expect(() => handleMessage(event)).toThrow(
      "Can only handle one record at a time."
    )
  })

  it("throws error if the record is not parsable JSON", () => {
    const event: SQSEvent = createSqsEvent({})
    event.Records[0].body = "pineapple"
    expect(() => handleMessage(event)).toThrow("Failed to parse message.")
  })

  it("correctly deserialises the message", () => {
    const obj = {
      fruit: "pineapple",
    }
    const event: SQSEvent = createSqsEvent(obj)
    expect(handleMessage(event)).toEqual(obj)
  })
})
