import { selectGymList } from "@/store/slices/gymSlice";
import { useSelector } from "react-redux";
import { GymCard } from "./GymCard";

export const GymList = () => {
  const list = useSelector(selectGymList);

  return (
    <div className="flex flex-1 overflow-auto flex-col gap-4">
      {list?.map((gym) => (
        <GymCard key={gym.id} gym={gym} />
      ))}
    </div>
  );
};
