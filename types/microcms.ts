export type Article = {
  id: string;
  title: string;
  body: string;
  img: {
    url: string;
    height: number;
    width: number;
  };
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
};
