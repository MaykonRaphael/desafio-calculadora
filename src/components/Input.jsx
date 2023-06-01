// eslint-disable-next-line react/prop-types
export function Input({value}) {
  return (
    <div className="w-full h-20 flex justify-end items-center text-3xl bg-slate-400">
      <input type="text" value={value} disabled className="w-full h-full flex justify-end bg-inherit p-3 font-bold" />
    </div>
  );
}
