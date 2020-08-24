export const postRequest = async (
  url,
  filters = [],
  page = 1,
  itemsPerPage = 20
) => {
  const response = await fetch(url, {
    method: "POST", // *GET, POST, PUT, DELETE, etc.
    headers: {
      "Content-Type": "application/json",
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: JSON.stringify({ filters, page, itemsPerPage }), // body data type must match "Content-Type" header
  });
  return response.json(); // parses JSON response into native JavaScript objects
};
