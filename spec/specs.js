describe("titleCase", function() {
  it("capitalizes the first letter of a word", function() {
    expect(titleCase("cat")).to.equal("Cat");
  });

  it("takes a single word in uppercase and returns it in titlecase", function() {
    expect(titleCase("CAT")).to.equal("Cat");
  });

  it("takes a single word in a mixedcase format and returns it in titlecase", function() {
    expect(titleCase("cAT")).to.equal("Cat");
  });

  it("takes a string of two words all lowercased, and returns it titlecased", function() {
    expect(titleCase("cat power")).to.equal("Cat Power");
  });
});
