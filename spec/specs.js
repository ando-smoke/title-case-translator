describe("titleCase", function() {
  it("capitalizes the first letter of a word", function() {
    expect(titleCase("cat")).to.equal("Cat");
  });

  it("takes a single word in uppercase and returns it in titlecase", function() {
    expect(titleCase("CAT")).to.equal("Cat");
  });
});
