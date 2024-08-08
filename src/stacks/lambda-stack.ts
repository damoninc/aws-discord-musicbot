import * as cdk from "aws-cdk-lib";
import { Construct } from "constructs";
import { Code, Function, Runtime } from "aws-cdk-lib/aws-lambda";
import path = require("path");

export class LambdaStack extends cdk.Stack {
  public songHandlerLambda: Function;
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    this.songHandlerLambda = new Function(this, "SongHandlerLambda", {
      runtime: Runtime.NODEJS_20_X,
      code: Code.fromAsset(
        path.join(
          __dirname,
          "../../build/src/lambda-functions/song-handler/src"
        )
      ),
      handler: "handler.main",
    });
  }
}
