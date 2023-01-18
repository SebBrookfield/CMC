import { handler } from "../../../src/handlers/persistenceHandler"
import { createLambdaContext, createSqsEvent } from "../../utils/sqsUtils"

describe("persistenceHandler tests", () => {
  it("does not exception when run", async () => {
    let event = createSqsEvent({})
    let context = createLambdaContext()
    await expect(handler(event, context)).resolves.not.toThrow()
  })
})
