function format(num: number) {
    return ("0" + num).slice(-2);
}

export function dateFormat(seconds: number, formatFunction: any) {

  const minutes = Math.floor(seconds / 60);
  const secondsLeft = seconds % 60;
  const hours = Math.floor(minutes / 60);
  const minutesLeft = minutes % 60;

  return `${hours}h ${formatFunction(minutesLeft)}m ${formatFunction(
    secondsLeft
  )}s`;
}

console.log(dateFormat(12406893, format));
