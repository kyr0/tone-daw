
/*
import { add, fraction } from "mathjs";

export const filterTime = (time: string|number) => {

  time = String(time).replace('m', '');
  const timeSplits = time.split(' + ');

  const sum = timeSplits.reduce(((total: number, element: string) => {
    return add(fraction(total), fraction(element));
  }) as any, 1) as any;

  const str = [];

  while(sum.d != 1) {
    if(sum.n % 2 != 0) {
      str.push('1/' + sum.d);
      sum.n = (sum.n - 1) / 2;
    } else {
      sum.n = sum.n / 2;
    }
    sum.d = sum.d / 2;
  }

  if (sum.n > 1) {
      str.unshift(sum.n-1 + 'm');
  }
  return str.join(' + ');
}
*/