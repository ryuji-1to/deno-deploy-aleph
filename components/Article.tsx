type Props = {
  url: string;
  width: number;
  height: number;
  title: string;
};

export const Article = (props: Props) => {
  return (
    <div>
      <img
        src={props.url}
        alt="something"
        width={props.width}
        height={props.height}
        className="w-64 shadow-md"
      />
      <h1>{props.title}</h1>
    </div>
  );
};
