export default class CloseSection {
    start: number;
    end: number;

    constructor(
        start: number,
        end: number
    ) {
        this.start = start;
        this.end = end;
    }

    toString(): string {
        return `[${this.start}, ${this.end}]`;
    }

    isInPoint(point: number): boolean {
        return this.start <= point && point <= this.end;
    }
}