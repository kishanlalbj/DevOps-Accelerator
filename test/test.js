const expect = require("chai").expect;
var request = require("request"),
  helloWorld = require("../bin/www"),
  base_url = "http://localhost:3001/";

describe("a test suite", function() {
  it("should be true", function() {
    expect(true).to.equal(true);
  });

  it("should be false", function() {
    expect(false).to.equal(false);
  });

  it("should be 200", function(done) {
    request.get(base_url, function(error, response, body) {
      expect(body).to.equal("Hello World");
      //   assert.equal("Hello World", body);
      done();
    });
  });
});
