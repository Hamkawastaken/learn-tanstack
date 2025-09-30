import { getTodos } from "@/lib/api";
import { useQuery } from "@tanstack/react-query";
import { CircleCheck, Trash } from "lucide-react";

type Todo = {
  id: number;
  title: string;
  completed: boolean;
};

export function TodoList() {
  const { data } = useQuery({
    queryKey: ["todos", { limit: 10 }],
    queryFn: () => getTodos({ limit: 10 }),
  });

  console.log(data);

  return (
    <div className="bg-amber-100 mt-12 p-8 w-[700px] rounded-xl">
      {data?.map((todo: Todo) => {
        return (
          <div
            className="flex items-center gap-8 mt-2 bg-pink-200 py-2 px-4 rounded-md justify-between cursor-pointer"
            key={todo.id}
          >
            <div>
              <CircleCheck color="red" size={18} />
            </div>
            <div>{todo.title}</div>
            <div>
              <Trash color="red" size={18} />
            </div>
          </div>
        );
      })}
    </div>
  );
}
