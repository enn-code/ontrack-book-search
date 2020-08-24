export const postRequest = async (
  url,
  filters = [],
  page = 1,
  itemsPerPage = 20
) => {
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ filters, page, itemsPerPage }),
  });
  return response.json();
};
