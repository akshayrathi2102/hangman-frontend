const BASE_URL = "https://cryptic-falls-39871.herokuapp.com/api/sessions";

const createSession = async (name) => {
  const response = await fetch(`${BASE_URL}/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json; charset=utf-8"
    },
    body: JSON.stringify({
      name
    })
  });

  const session = response.json();
  return session;
}

const playInSession = async (id, letter) => {
  const response = await fetch(`${BASE_URL}/${id}/play`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json; charset=utf-8"
    },
    body: JSON.stringify({
      letter
    })
  });

  const session = response.json();
  return session;
}

module.exports = {
  createSession,
  playInSession
}