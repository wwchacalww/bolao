type titleProps = {
  text: string;
  type: number;
};

export function Title({ text, type = 1 }: titleProps) {
  return <h1 className="text-gray-100 font-bold text-base">{text}</h1>;
}
