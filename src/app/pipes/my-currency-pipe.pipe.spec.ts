import { MyCurrencyPipePipe } from './my-currency-pipe.pipe';

describe('MyCurrencyPipePipe', () => {
  it('create an instance', () => {
    const pipe = new MyCurrencyPipePipe();
    expect(pipe).toBeTruthy();
  });
});
