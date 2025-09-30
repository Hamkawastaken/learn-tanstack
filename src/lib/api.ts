export const getTodos = async ({ limit }: { limit: number }) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/todos?_limit=${limit}`
  );
  return res.json();
};
