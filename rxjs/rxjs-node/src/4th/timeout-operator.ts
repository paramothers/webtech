import { Observable, Subscription } from 'rxjs';

export class TimeoutOperator {
  public simple(): void {
    const observable = Observable.create((observer: any) => {
      const timoutId = setTimeout(() => {
        observer.next();
        observer.complete();
      }, 1000);
      return () => clearInterval(timoutId);
    });

    const subscription: Subscription = observable.subscribe(() => {
      console.log('custome done');
      subscription.unsubscribe();
    });
  }

  public builtin(): void {
    Observable.timer(1000).subscribe(() => console.log('built in done'));
  }

  private randomNumber = () => {
    Math.floor(Math.random() * 100);
  };
}
