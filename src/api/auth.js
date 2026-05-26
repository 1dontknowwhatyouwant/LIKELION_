const API_URL = process.env.REACT_APP_API_URL;

export async function login({ id, password }) {
  const res = await fetch(`${API_URL}/api/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      id: id,
      password: password,
    }),
  });

  if (!res.ok) {
    throw new Error("로그인 API 호출 실패");
  }

  return res.json();
}
