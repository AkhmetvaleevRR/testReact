import type { MouseEventHandler } from "react";

interface Props {
  name: string;
  isActive: boolean;
  onClick: MouseEventHandler<HTMLButtonElement>;
}

export const Tab = ({ name, isActive, onClick }: Props) => {
  return (
    <button disabled={isActive} onClick={onClick}>
      {name}
    </button>
  );
};
