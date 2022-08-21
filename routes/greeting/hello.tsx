import { useData, Link } from 'aleph/react';
import { microcmsClient } from '~/lib/microcmsClient.ts';
import { Article } from '~/components/Article.tsx';

export const data = {
  get: async () => {
    return await microcmsClient.get<any>({
      endpoint: 'articles',
    });
  },
};

export default function Hello() {
  const { data } = useData();
  const first = data?.contents[0];
  console.log(data.contents[0]);

  return (
    <Link to={`/${first.id}`}>
      <Article
        url={first.img.url}
        width={first.img.width}
        height={first.img.height}
        title={first.title}
      />
    </Link>
  );
}
