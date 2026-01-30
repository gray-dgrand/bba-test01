function createCharacters() {
  const characters = [
    { name: 'Mario', level: 10, health: 500 },
    { name: 'Luigi', level: 15, health: 600 },
    { name: 'Peach', level: 20, health: 400 },
    { name: 'Yoshi', level: 25, health: 350 }
  ];

  const charactersPowerUp = characters.map((c) => ({
    name: c.name.toUpperCase(),
    level: c.level * 2,
    health: c.health * 3
  }));

  const possibleWinners = charactersPowerUp.filter((c) => c.health > 1000);

  return { charactersPowerUp, possibleWinners };
}

function printLeaderboard(players) {
  const sorted = [...players].sort((a, b) => b.score - a.score);
  const medals = ['🏆', '🥈', '🥉'];

  return sorted
    .map((p, i) => {
      const rank = i + 1;
      const medal = rank <= 3 ? medals[rank - 1] + ' ' : '';
      const scoreStr = p.score.toLocaleString();
      return `${medal}${rank}. ${p.name} - ${scoreStr} pts`;
    })
    .join('\n');
}

const { charactersPowerUp, possibleWinners } = createCharacters();
console.log('charactersPowerUp:', charactersPowerUp);
console.log('possibleWinners:', possibleWinners);

const players = [
  { name: 'Mario', score: 1000 },
  { name: 'Luigi', score: 900 },
  { name: 'Peach', score: 850 },
  { name: 'Yoshi', score: 800 },
  { name: 'Phong', score: 500 }
];
console.log(printLeaderboard(players));
