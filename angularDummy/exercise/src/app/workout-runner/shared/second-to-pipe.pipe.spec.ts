/* tslint:disable:no-unused-variable */

import { SecondToPipePipe } from './second-to-pipe.pipe';

describe('Pipe: SecondToPipee', () => {

  let secondToTimePipe: SecondToPipePipe = null;

  beforeEach(() => {
    secondToTimePipe = new SecondToPipePipe();
  });
  it('should convert integer to time', () => {

    // expect(secondToTimePipe).toBeTruthy();
    expect(secondToTimePipe.transform(5)).toEqual('00:00:05');
    expect(secondToTimePipe.transform(65)).toEqual('00:01:05');
  });
});
