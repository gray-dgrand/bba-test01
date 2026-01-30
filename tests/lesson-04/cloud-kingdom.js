let playerName = 'Mario';
let currentLives = 3;

const COINS_LEVEL_1 = 25;
const COINS_LEVEL_2 = 30;
const COINS_LEVEL_3 = 45;

const totalCoins = COINS_LEVEL_1 + COINS_LEVEL_2 + COINS_LEVEL_3;
const averageCoins = totalCoins / 3;
const remainderCoins = totalCoins % 3;

console.log('Số coin dư khi chia tổng cho 3:', remainderCoins);
