describe('Place', function() {
  it("creates a new place with the given properties", function() {
    var testPlace = new Place("France","Paris");
    expect(testPlace.country).to.equal("France");
    expect(testPlace.city).to.equal("Paris");
    expect(testPlace.details).to.eql([]);
  });

  it("adds the fullName method to all contacts", function() {
    var testContact = new Contact("Sherlock","Holmes");
    expect(testContact.fullName()).to.equal("Sherlock Holmes");
  });

  describe('Address', function() {
  it("creates a new address with the given specifications", function() {
    var testAddress = new Address("123 Main St", "Test City","Test State");
    expect(testAddress.street).to.equal("123 Main St");
    expect(testAddress.city).to.equal("Test City");
    expect(testAddress.state).to.equal("Test State");
  });
});
});
