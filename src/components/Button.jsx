// eslint-disable-next-line react/prop-types
export function Button({title, onClick}) {
  return (
    <div onClick={onClick} className="flex justify-center p-10 font-bold text-2xl cursor-pointer bg-teal-500 border border-l-teal-700 hover:opacity-70">
      {title}
    </div>
  );
}
