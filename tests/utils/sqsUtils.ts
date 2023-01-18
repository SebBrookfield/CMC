import { Context, SQSEvent } from "aws-lambda"

export const createLambdaContext = (): Context => {
  const emptyFunction = (): void => {}

  return {
    callbackWaitsForEmptyEventLoop: true,
    functionName: "functionName",
    functionVersion: "functionVersion",
    invokedFunctionArn: "invokedFunctionArn",
    memoryLimitInMB: "0",
    awsRequestId: "awsRequestId",
    logGroupName: "logGroupName",
    logStreamName: "logStreamName",
    identity: undefined,
    clientContext: undefined,
    getRemainingTimeInMillis: (): number => 1,
    done: emptyFunction,
    fail: emptyFunction,
    succeed: emptyFunction,
  }
}

export const createSqsEvent = <T>(event: T): SQSEvent => {
  return {
    Records: [
      {
        messageId: "",
        receiptHandle: "",
        body: JSON.stringify(event),
        attributes: {
          ApproximateFirstReceiveTimestamp: "",
          ApproximateReceiveCount: "",
          SenderId: "",
          SentTimestamp: "",
        },
        messageAttributes: {},
        awsRegion: "",
        eventSource: "",
        eventSourceARN: "",
        md5OfBody: "",
      },
    ],
  }
}
