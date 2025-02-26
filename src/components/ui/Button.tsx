import { capitalize } from "@/libs/utils";

export default function Button({
  text,
  isDisabled,
  onClick,
}: {
  text: string;
  isDisabled: boolean;
  onClick: () => void;
}) {
  return (
    <button
    disabled={isDisabled}
      className="flex gap-2 items-center h-fit justify-center flex-row py-2.5 text-sm px-5 w-fit disabled:bg-parch04 disabled:text-parch09 text-parch01 bg-teal12 hover:bg-teal10 active:bg-teal13 cursor-pointer rounded-lg"
      onClick={onClick}
    >
      {capitalize(text)}
    </button>
  );
}
