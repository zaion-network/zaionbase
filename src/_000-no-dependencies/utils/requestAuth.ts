export const requestAuth = async (user: string, host: string) => {
  const response = await fetch(host, {
    mode: "cors",
    headers: {
      Authorization: user,
    },
  });
  return await response.text();
};
