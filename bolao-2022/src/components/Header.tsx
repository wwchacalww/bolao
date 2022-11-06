type headerProp = {
  name: string;
  avatarUrl: string;
};

export function Header({ name, avatarUrl }: headerProp) {
  return (
    <header className="bg-gray-800 w-full h-36 flex flex-row align-middle items-center justify-between px-4">
      <h1 className="text-gray-100 font-bold text-2xl border-y-2 border-t-green-500 border-b-green-500">
        BOLÃO
      </h1>
      <div className="flex flex-row gap-4">
        <img className="h-12 w-12 rounded-full" src={avatarUrl} />
        <div className="flex flex-col">
          <p className="text-gray-300">Bem vindo,</p>
          <strong className="text-green-500">{name}</strong>
        </div>
      </div>
    </header>
  );
}
