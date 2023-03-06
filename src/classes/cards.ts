export class Card {
    constructor(private readonly rank: Rank, private readonly suite: Suite) {
        this.rank = rank;
        this.suite = suite;
    }

    compare(other: Card): number {
        if (this.rank === other.rank) {
            return this.suite > other.suite ? 1 : -1;
        }
        return this.rank > other.rank ? -1 : 1;
    }
}

export enum Rank {
    DIAMOND,
    SPADE,
    HEART,
    CLUB
}

export enum Suite {
    TWO,
    THREE,
    FOUR,
    FIVE,
    SIX,
    SEVEN,
    EIGHT,
    NINE,
    TEN,
    JACK,
    QUEEN,
    KING,
    ACE
}