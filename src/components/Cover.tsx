import { Logo } from "./Logo";

export function Cover() {
  return (
    <div className="bg-slate-600 p-2 rounded-md text-white">
      <Logo />
      <p className="uppercase">lorelei</p>
      <p>cocteau twins</p>
    </div>
  );
}
