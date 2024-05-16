import { capitalize, reverseString, calc, caesarCipher } from "./functions"
describe('odin assignment on tests', () => {
    test('reversed string', () => expect(reverseString('kim')).toMatch('mik'));
    test('first letter to be capital', () => expect(capitalize('string')).toMatch('String'));
    test('calculator addition', ()=> expect(new calc(2,3).add()).toBe(5));
    test('calculator subtraction', ()=> expect(new calc(2,3).subtract()).toBe(-1));
    test('calculator multiplication', ()=> expect(new calc(2,3).multiply()).toBe(6));
    test('calculator divide', ()=> expect(new calc(2,1).divide()).toBe(2));
})


describe ('testing cipher texts', () => {
    test('punctuations', () => expect(caesarCipher(' .,?!!',1)).toMatch('.,?!AA'));
    test('wrap', () => expect(caesarCipher('abcde',1)).toMatch('BCDEF'));
})
