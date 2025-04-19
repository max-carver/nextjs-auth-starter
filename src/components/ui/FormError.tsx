import { FaExclamation } from "react-icons/fa";

export default function FormError({ text }: { text?: string }) {
  if (!text) return null;
  return (
    <div className="bg-destructive/10 border border-destructive rounded-md p-2 flex items-center gap-2">
      <FaExclamation className="size-4 text-destructive" />
      <p className="text-sm text-destructive">{text}</p>
    </div>
  );
}
