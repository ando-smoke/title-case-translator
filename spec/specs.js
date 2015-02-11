describe("titleCase", function() {
  it("capitalizes the first letter of a word", function() {
    expect(titleCase("cat")).to.equal("Cat");
  });

  it("takes a single word in uppercase and returns it in \
  titlecase", function() {
    expect(titleCase("CAT")).to.equal("Cat");
  });

  it("takes a single word in a mixedcase format and returns \
  it in titlecase", function() {
    expect(titleCase("cAT")).to.equal("Cat");
  });

  it("takes a string of two words all lowercased, and returns \
  it titlecased", function() {
    expect(titleCase("cat power")).to.equal("Cat Power");
  });

  it("takes in the string 'snow white AND the seven dwarfs' \
  and returns 'Snow White and the Seven Dwarfs'", function() {
    expect(titleCase("snow white AND the seven dwarfs")).to.equal("Snow White and the Seven Dwarfs");
  });

  it("takes in the string 'Ladies And Gentlemen Of The Jury' \
  and returns 'Ladies and Gentlemen of the Jury'", function() {
    expect(titleCase("Ladies And Gentlemen Of The Jury")).to.equal("Ladies and Gentlemen of the Jury");
  });

  it("takes in the string 'about a boy' and returns 'About a Boy'", function() {
    expect(titleCase("about a boy")).to.equal("About a Boy");
  });
});
