import { capitalize } from "@/libs/utils";

export default function Badge({ text }: { text: string }) {
  return (
    <div className="flex items-center rounded-full bg-teal08/10 px-3 py-1 text-xs font-medium leading-5 text-teal11 ">
      {capitalize(text)}
    </div>
  );
}
