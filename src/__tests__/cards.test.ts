import { Card, Rank, Suite } from "../classes/cards";

describe("Card Comparison", () => {
    test("Given Five Of Diamond and I want to compare it with Three Of Club it should be 1", () => {
        const fiveOfDiamond = new Card(Rank.DIAMOND, Suite.FIVE);
        const threeOfClub = new Card(Rank.CLUB, Suite.THREE);
        expect(fiveOfDiamond.compare(threeOfClub)).toEqual(1);
    });

    test("Given Three Of Diamond and I want to compare it with Five Of Club it should be 1", () => {
        const threeOfDiamond = new Card(Rank.DIAMOND, Suite.THREE);
        const fiveOfClub = new Card(Rank.CLUB, Suite.FIVE);
        expect(threeOfDiamond.compare(fiveOfClub)).toEqual(1);
    });

    test("Given Three Of Diamond and I want to compare it with Five Of Diamond it should be -1", () => {
        const threeOfDiamond = new Card(Rank.DIAMOND, Suite.THREE);
        const fiveOfDiamond = new Card(Rank.DIAMOND, Suite.FIVE);
        expect(threeOfDiamond.compare(fiveOfDiamond)).toEqual(-1);
    });
})