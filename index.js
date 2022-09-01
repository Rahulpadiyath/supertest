


const request = require("supertest");
const productId = "1a1c1e9b-b71c-4363-8f5c-4188c875c87e";
const url = "https://core.youkraft.com/graphql";
const productQueryData = {
  query: `query Product($productId: ID!) {
    product(id: $productId) {
      id
      name
    }
  }`,
  variables: { productId },
};

request(url)
  .post("/")
  .send(productQueryData)
  .expect(200)
  .end(function (err, res) {
    if (res) {

      const data = res.body.data;

      if (typeof data.product.name === "number") {
        console.log("**Test passed**");
      } else {
        console.log("**Test failed**");
      }

      if (err) {
        console.log("err", err);
        throw err;
      }
    }
  });
