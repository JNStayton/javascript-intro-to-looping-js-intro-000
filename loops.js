function forLoop(array) {
  for (let i = 0; i < 25; i++) {
  if (i === 1)
    array.push(`I am 1 strange loop`);
  else if ( i === 0 || 1 < i < 25)
    array.push(`I am ${i} strange loops`);
}
