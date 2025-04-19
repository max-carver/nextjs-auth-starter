import { FaCheck } from "react-icons/fa";

export default function FormSuccess({ text }: { text?: string }) {
  if (!text) return null;
  return (
    <div className="bg-green-500/10 border border-green-500 rounded-md p-2 flex items-center gap-2">
      <FaCheck className="size-4 text-green-500" />
      <p className="text-sm text-green-500">{text}</p>
    </div>
  );
}
