// Import any necessary dependencies

// Define constants
const BASE_URL = "https://game.invent.solutions/public/api/v1";

// Function to handle POST requests with formdata
async function postData(url: string, formData: FormData, authToken?: string) {
  const headers: Record<string, string> = {};
  if (authToken) {
    headers["Authorization"] = `Bearer ${authToken}`;
  }

  const response = await fetch(url, {
    method: "POST",
    headers,
    body: formData,
  });
  return response.json();
}

// Admin Start Play endpoint function
export async function adminStartPlay(
  username: string,
  password: string,
  gameSlug: string,
  authToken: string
) {
  const formData = new FormData();
  formData.append("username", username);
  formData.append("password", password);
  formData.append("game_slug", gameSlug);
  const url = `${BASE_URL}/Admin/StartPlay`;
  return postData(url, formData, authToken);
}

// Admin Next Question endpoint function
export async function adminNextQuestion(authToken: string) {
  const url = `${BASE_URL}/Admin/NextQuestion`;
  return postData(url, new FormData(), authToken);
}

// Admin Winners List endpoint function
export async function adminWinnersList(authToken: string) {
  const url = `${BASE_URL}/Admin/Winnerslist`;
  return postData(url, new FormData(), authToken);
}

// Show Answer Triggers to backend
export async function showAnswerEventTrigger(
  gameSlug: string,
  authToken: string
) {
  const formData = new FormData();
  formData.append("game_slug", gameSlug);
  const url = `${BASE_URL}/Admin/ShowAnswer`;
  return postData(url, formData, authToken);
}
