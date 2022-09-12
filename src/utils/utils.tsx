export function makeСorrectDeclensionOfMouseWord (numOfMice: number): string {
  if ((numOfMice == 1)||((numOfMice % 10 === 1) && (numOfMice % 100 !== 11))) {
    return 'мышь'
  } else if ((numOfMice % 100 > 10) && (numOfMice % 100 < 15)) {
    return 'мышей'
  } else if ((numOfMice % 10 > 1) && (numOfMice % 10 < 5)) {
    return 'мыши'
  } else {
    return 'мышей'
  }
}
