import { getDetailTodo } from "@/lib/api";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router";

export function TodoDetail() {
  const { id } = useParams();

  const { data } = useQuery({
    queryKey: ["todo", id],
    queryFn: () => getDetailTodo(id ? "" + id : ""),
  });

  return (
    <>
      <div className="bg-amber-100 p-12 rounded-md mt-12">
        <h1>{data?.title}</h1>
        <p>No. Id = {data?.id}</p>
      </div>
    </>
  );
}
