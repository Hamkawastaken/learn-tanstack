export const getTodos = async ({ limit }: { limit: number }) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/todos?_limit=${limit}`
  );
  return res.json();
};

export const getDetailTodo = async (id: string) => {
  if (id) {
    const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);
    return res.json();
  }
};
