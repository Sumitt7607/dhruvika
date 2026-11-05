import { describe, it } from "vitest";
import { renderToString } from "react-dom/server";
import { Route } from "../routes/index";

describe("SSR test", () => {
  it("renders Index without throwing", () => {
    const Component = Route.options.component!;
    const html = renderToString(<Component />);
    console.log("HTML length:", html.length);
  });
});

