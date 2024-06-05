async function autheticateUser(
  username: string,
  email: string,
  password: string
) {
  const response = await fetch("http://127.0.0.1:8000/api/login/", {
    headers: {
      "Content-Type": "application/json",
    },
    method: "POST",
    body: JSON.stringify({
      username,
      email,
      password,
    }),
  });

  if (!response.ok) throw new Error(`HTTP error status: ${response.status}`);

  const authData = await response.json();
  return authData.token;
}

export { autheticateUser };
