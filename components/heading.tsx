interface HeadingProps {
  title: string;
}

export function Heading({ title }: HeadingProps) {
  return (
    <h1 className="text-xs my-3 text-gray-400 font-semibold uppercase">
      {title}
    </h1>
  );
}
