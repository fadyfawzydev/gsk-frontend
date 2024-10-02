// Import Axios
import axios, { AxiosResponse } from "axios";

// Define constants
const BASE_URL = "https://gskknowledgeleague.com/public/api/v1";

// Function to handle POST requests with formdata
async function postData(
  url: string,
  formData: FormData,
  authToken?: string
): Promise<any> {
  const headers: Record<string, string> = {
    "Content-Type": "multipart/form-data",
  };
  if (authToken) {
    headers["Authorization"] = `Bearer ${authToken}`;
  }

  const response: AxiosResponse<any> = await axios.post(url, formData, {
    headers,
  });
  return response.data;
}

// Admin Start Play endpoint function
export async function adminStartPlay(
  username: string,
  password: string,
  gameSlug: string,
  authToken: string
): Promise<any> {
  const formData = new FormData();
  formData.append("username", username);
  formData.append("password", password);
  formData.append("game_slug", gameSlug);
  const url = `${BASE_URL}/Admin/StartPlay`;
  return postData(url, formData, authToken);
}

// Admin Next Question endpoint function
export async function adminNextQuestion(
  authToken: string,
  getNextQuestion: boolean
): Promise<any> {
  const url = `${BASE_URL}/Admin/NextQuestion`;
  const formData = new FormData();
  formData.append("get_next_question", getNextQuestion ? "true" : "false");
  return postData(url, formData, authToken);
}

// Admin Winners List endpoint function
export async function adminWinnersList(authToken: string): Promise<any> {
  const url = `${BASE_URL}/Admin/Winnerslist`;
  return postData(url, new FormData(), authToken);
}
