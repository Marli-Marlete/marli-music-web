import { Controls } from "./Controls";
import { Cover } from "./Cover";

export function Player() {
  return (
    <div className="flex gap-4 flex-col">
      <Cover />
      <Controls />
    </div>
  );
}
