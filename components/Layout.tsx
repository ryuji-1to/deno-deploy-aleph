import type { FC, ReactNode } from 'react';
import Header from '~/components/Header.tsx';

type Props = {
  children: ReactNode;
};

export const Layout: FC<Props> = (props) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="p-4 flex-1 bg-gray-800">{props.children}</main>
    </div>
  );
};
