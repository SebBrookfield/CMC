import { SQSEvent } from "aws-lambda"

export const handleMessage = <T>(event: SQSEvent): T => {
  if (event.Records.length === 0) {
    throw new Error("No records in event.")
  }

  if (event.Records.length > 1) {
    throw new Error("Can only handle one record at a time.")
  }

  try {
    return JSON.parse(event.Records[0].body)
  } catch {
    throw new Error("Failed to parse message.")
  }
}
