function findPairsDivisibleBy17() {
  let count = 0;

  for (let a = 1; a <= 100; a++) {
    for (let b = 1; b <= 100; b++) {
      if ((a + b) % 17 === 0) {
        console.log(`(${a}, ${b}) = ${a + b}`);
        count++;
      }
    }
  }

  console.log(`\nTổng cộng: ${count} cặp`);
}

// Test
findPairsDivisibleBy17();
