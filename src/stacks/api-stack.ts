import * as cdk from "aws-cdk-lib";
import { Construct } from "constructs";
import { LambdaIntegration, RestApi } from "aws-cdk-lib/aws-apigateway";
import { Function } from "aws-cdk-lib/aws-lambda";

interface ApiStackProps extends cdk.StackProps {
  songHandlerLamdba: Function;
}

export class ApiStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props: ApiStackProps) {
    super(scope, id, props);
    const api = new RestApi(this, "MusicBotApiGateway", {
      restApiName: "MusicBotGateway",
      description: "Used to trigger lambda.",
    });

    const songHandlerIntegration = new LambdaIntegration(
      props.songHandlerLamdba
    );

    const resource = api.root.addResource("MusicBotResource");
    resource.addMethod("POST", songHandlerIntegration);
  }
}
