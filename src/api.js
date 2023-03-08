const gameUrl = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/7WIjXsAQjeapEeq6tE9U/scores';

const postData = async (player) => {
  const response = await fetch(`${gameUrl}`,
    {
      method: 'POST',
      body: JSON.stringify({
        user: player.user,
        score: player.score,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
  return response.json();
};

const getData = async () => {
  const response = await fetch(`${gameUrl}`, {
    method: 'Get',
  });
  return response.json();
};

export { postData, getData };