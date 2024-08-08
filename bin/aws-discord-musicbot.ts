#!/usr/bin/env node
import "source-map-support/register";
import * as cdk from "aws-cdk-lib";
import { ApiStack } from "../src/stacks/api-stack";
import { LambdaStack } from "../src/stacks/lambda-stack";

const app = new cdk.App();
const lambdaStack = new LambdaStack(app, "LambdaStack");
new ApiStack(app, "ApiStack", {
  songHandlerLamdba: lambdaStack.songHandlerLambda,
});
