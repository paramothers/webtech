import { Observable } from "rxjs";

export class FlatternOperator {
  twoSeconds$ = Observable.interval(2000);
  fetchSymbolFunction = syumbol =>
    this.twoSeconds$.mergeMap(() => requestQutoes(syumbol));

  /**
   * name
   */
  public flatternSample(): void {
    const array = [[1, 2], [3, 4], [6, 7]].reduce((a, b) => {
      return a.concat(b);
    }, []);

    console.log(array);
  }

  /**
   * arraySample
   */
  public arraySample() {
    const arr = [1, 2, 4];
    arr.map(value => Array(value).fill(value));

    const temp = arr.map(value => Array(value).fill(value)).concatAll();

    console.log(temp);
  }

  /**
   * useMergeMap
   */
  public useMergeMap() {}
}
