import { SQSEvent, Context } from "aws-lambda"
import { handleMessage } from "../utils/sqs"
import { BrokerEvent } from "../types/brokerEvent"
import { flatten } from "../utils/flattener"

export async function handler(
  event: SQSEvent,
  context: Context
): Promise<void> {
  const brokerEvent = handleMessage<BrokerEvent>(event)
  const flattenedBrokerEvent = flatten(brokerEvent)
}
