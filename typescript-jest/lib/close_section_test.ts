import CloseSection from "./close_section";
describe('整数閉区間を作成し取得', () => {
    describe('整数閉区間が下端点2と上端点5を作成し取得', () => {
        test('下端点 2 を取得', () => {
            const section = new CloseSection(2, 5);
            expect(section.start).toEqual(2);
        });
        test('上端点 5 を取得', () => {
            const section = new CloseSection(2, 5);
            expect(section.end).toEqual(5);
        });
    })

    describe('整数閉区間が下端点と上端点が同一の整数の場合', () => {
        describe('整数閉区間が下端点2と上端点2を作成し取得', () => {
            test.each([
                {expected: 2, desc: '下端点', start: 2, end: 2},
                {expected: 2, desc: '上端点', start: 2, end: 2},
            ])('$desc $expected を取得', ({expected, desc, start, end}) => {
                const section = new CloseSection(start, end);
                expect(section.start).toEqual(expected);
            });
        })
    });
});

describe('整数閉区間を文字列表記で取得', () => {
    test('整数閉区間は文字列である', () => {
        const section = new CloseSection(2, 5);
        expect(typeof section.toString() === 'string').toBe(true);
    });
    describe('下端点を2, 上端点を5の場合は', () => {
        test('[2, 5]の文字列を取得', () => {
            const section = new CloseSection(2, 5);
            expect(section.toString()).toEqual('[2, 5]');
        });
    });
});

describe('整数閉区間は指定した整数を含むかどうかを判定', () => {
    describe('下端点を2, 上端点を5の場合', () => {
        describe('整数の場合', () => {
            test('2 が区間内である', () => {
                const section = new CloseSection(2, 5);
                expect(section.isInPoint(2)).toEqual(true);
            });
            test('6 が区間外である', () => {
                const section = new CloseSection(2, 5);
                expect(section.isInPoint(6)).toEqual(false);
            });
        });
        describe('指定した整数が小数点の場合', () => {
            test('2.5 が区間内である', () => {
                const section = new CloseSection(2, 5);
                expect(section.isInPoint(2.5)).toEqual(true);
            });
            test('6.5 区間外である', () => {
                const section = new CloseSection(2, 5);
                expect(section.isInPoint(6.5)).toEqual(false);
            });
        });
    })
});