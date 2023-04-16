const makeCard = () => {
  const cardObject = { 1: 'Cat card', 2: 'Defuse card', 3: 'Shuffle card', 4: 'Exploding kitten card' };
  let cardArray = [];
  const numberOfCard = 5;
  const getRandomNumber = () => Math.floor(Math.random() * (5 - 1) + 1);
  for (let index = 0; index < numberOfCard; index++) cardArray.push(cardObject[getRandomNumber()]);
  return cardArray;
};
export default makeCard;
