import { Handler } from "../src/lambda-functions/song-handler/src/handler";
describe("Test return type", () => {
  const songHandler = new Handler();

  it("should return type 1", async () => {
    const result = await songHandler.main({ body: { type: 1 } });
    expect(JSON.stringify(result)).toBe(JSON.stringify({ type: 1 }));
  });
});
