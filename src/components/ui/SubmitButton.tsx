import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";
import { AiOutlineLoading } from "react-icons/ai";

interface SubmitButtonProps {
  className?: string;
  variant?: "default" | "outline" | "ghost" | "link";
  children: ReactNode;
  isLoading?: boolean;
}

const SubmitButton = ({
  className,
  variant,
  children,
  isLoading,
}: SubmitButtonProps) => {
  return (
    <>
      {isLoading ? (
        <Button
          type="submit"
          className={cn("w-full", className)}
          variant={variant}
          disabled
        >
          <AiOutlineLoading className="ml-2 size-4 animate-spin" />
        </Button>
      ) : (
        <Button
          type="submit"
          className={cn("w-full", className)}
          variant={variant}
        >
          {children}
        </Button>
      )}
    </>
  );
};

export default SubmitButton;
