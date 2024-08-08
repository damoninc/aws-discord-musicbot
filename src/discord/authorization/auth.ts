export class DiscordAuth {
  public static verifyRequest(request: any): any {
    if (request["type"] === 1) {
      return {
        type: 1,
      };
    }
  }
}
