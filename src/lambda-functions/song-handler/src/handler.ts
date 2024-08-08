import { DiscordAuth } from "../../../discord";
export class Handler {
  public async main(event: any) {
    return DiscordAuth.verifyRequest(event.body);
  }
}

const handlerInstance = new Handler();
export const main = handlerInstance.main.bind(handlerInstance);
