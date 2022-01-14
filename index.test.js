const { convertTimeToWords } = require("./index");

describe("Time to words", () => {
  it("Handles midnight", () => {
    const timeInWords = convertTimeToWords("0:00");
    expect(timeInWords).toBe("midnight");
  });

  it("Handles 8 o'clock", () => {
    const timeInWords = convertTimeToWords("8:00");
    expect(timeInWords).toBe("eight o'clock");
  });

  it("Handles 8:15", () => {
    const timeInWords = convertTimeToWords("8:15");
    expect(timeInWords).toBe("quarter past eight");
  });

  it("Handles 30 - 8:30", () => {
    const timeInWords = convertTimeToWords("8:30");
    expect(timeInWords).toBe("half past eight");
  });

  it("Handles times after 45 mins - 2:45", () => {
    const timeInWords = convertTimeToWords("2:45");
    expect(timeInWords).toBe("quarter to three");
  });

  it("Handles minute past 30 - 2:35", () => {
    const timeInWords = convertTimeToWords("2:35");
    expect(timeInWords).toBe("twenty five to three");
  });

  it("Handles time 11 mins - 2:11", () => {
    const timeInWords = convertTimeToWords("2:11");
    expect(timeInWords).toBe("eleven past two");
  });
});
