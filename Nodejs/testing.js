import CascadeAPI from "./cascadeAPI";

function test() {
  const c = new CascadeAPI({ apiKey: "", url: "" });
  c.create({
    asset: {
      page: {},
    },
  });
}
