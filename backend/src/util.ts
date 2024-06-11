export function randomInRange(min: number, max: number): number {
  return (max - min) * Math.random() + min;
}
