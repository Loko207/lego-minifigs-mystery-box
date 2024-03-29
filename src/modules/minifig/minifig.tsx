import { FC } from "react";
import { useParams } from "react-router-dom";
import useSWR from "swr";

export const Minifig: FC = () => {
  const { id } = useParams<Record<"id", string>>();
  const { data } = useSWR(`/lego/minifigs/${id}`);
  console.log(data);
  return <div>Minifig</div>;
};
export default Minifig;
