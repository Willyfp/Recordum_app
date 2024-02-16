import OptionCard from "@/components/OptionCard";
import { GymType } from "@/types";
import { useCookies } from "next-client-cookies";

export const GymCard = ({ gym }: { gym: GymType }) => {
  const cookies = useCookies();
  return (
    <OptionCard
      key={gym.id}
      title={gym.fantasia}
      onClick={() => {
        cookies.set("GYM_ID", JSON.stringify(gym.id));
        location.reload();
      }}
    />
  );
};
