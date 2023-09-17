function RandomNum(max: number): number;
function RandomNum(max: number, quantity: number): number[];
function RandomNum(
  max: number,
  quantity: number,
  allowRepeated: boolean
): number[];

function RandomNum(
  max: number,
  quantity: number = 1,
  allowRepeated: boolean = true
): number | number[] {
  const numbers = [];

  for (let i = 0; i < quantity; i++) {
    const rand = Math.floor(Math.random() * max);

    if (!allowRepeated && numbers.includes(rand)) {
      i--;
      continue; // Impede que os números se repitam.
    }

    numbers.push(rand);
  }

  if (numbers.length === 1) return numbers[0];
  return numbers;
}

export { RandomNum };
