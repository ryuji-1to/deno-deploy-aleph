import { useData, Link } from 'aleph/react';
import { microcmsClient } from '~/lib/microcmsClient.ts';
import { ArticleCard } from '~/components/ArticleCard.tsx';
import type { MicroCMSListResponse } from 'https://esm.sh/v90/microcms-js-sdk@2.2.1/dist/cjs/types.d.ts';
import type { Article } from '~/types/microcms.ts';

export const data = {
  get: async () => {
    return await microcmsClient.get<MicroCMSListResponse<Article>>({
      endpoint: 'articles',
    });
  },
};

export default function Hello() {
  const { data } = useData<MicroCMSListResponse<Article>>();

  return (
    <div className="">
      {data.contents.map((article) => (
        <ArticleCard
          key={article.id}
          tag="link"
          to={article.id}
          article={article}
        />
      ))}
    </div>
  );
}
