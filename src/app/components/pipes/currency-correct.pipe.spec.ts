import { CurrencyCorrectPipe } from './currency-correct.pipe';

describe('CurrencyCorrectPipe', () => {
  it('create an instance', () => {
    const pipe = new CurrencyCorrectPipe();
    expect(pipe).toBeTruthy();
  });
});
