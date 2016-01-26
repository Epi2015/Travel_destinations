describe('Place', function() {
  it("creates a new place with the given properties", function() {
    var testPlace = new Place("France","Paris");
    expect(testPlace.country).to.equal("France");
    expect(testPlace.city).to.equal("Paris");
    expect(testPlace.details).to.eql([]);
  });
});

  describe('Details', function() {
    it("creates a new detail with the given properties", function() {
      var testDetails = new Details("Marriot","Eifel Tower","Winter");
      expect(testDetails.hotel).to.equal("Marriot");
      expect(testDetails.landmark).to.equal("Eifel Tower");
      expect(testDetails.season).to.equal("Winter");
    });
  });
