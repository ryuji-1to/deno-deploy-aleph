import { Link } from 'aleph/react';
import type { ReactNode } from 'react';
import type { Article } from '~/types/microcms.ts';

type Props = {
  article: Article;
};

type AsImage = {
  tag: 'img';
};

type AsLink = {
  tag: 'link';
  to: string;
};

type ArticleCardProps = Props & (AsImage | AsLink);

export const ArticleCard = (props: ArticleCardProps) => {
  const { tag, article } = props;
  const ImageWrapper = ({ children }: { children: ReactNode }) => {
    return tag === 'link' ? (
      <Link to={props.to} className="inline-block">
        {children}
      </Link>
    ) : (
      <div>{children}</div>
    );
  };
  return (
    <ImageWrapper>
      <img
        src={article.img.url}
        alt={article.title}
        width={article.img.width}
        height={article.img.height}
        className="w-64 rounded-md shadow-md"
      />
    </ImageWrapper>
  );
};
