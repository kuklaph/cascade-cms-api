import CascadeAPI from "./cascadeAPI.js";

function test() {
  const c = new CascadeAPI({ apiKey: "", url: "" });
  c.remove({type: "page"}, {doWorkFlow: false})
  // c.remove({ type: "" });
}
