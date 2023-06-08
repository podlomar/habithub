import React from "react";
import { GetServerSidePropsContext, GetServerSidePropsResult } from 'next';
import dayjs from "dayjs";
import 'dayjs/locale/cs';
import css from './index.module.css';

dayjs.locale('cs');

interface Props {
  today: string;
}

export const getServerSideProps = async (
  context: GetServerSidePropsContext
): Promise<GetServerSidePropsResult<Props>> => {
  const today = dayjs().format('dd D. MMMM');

  return {
    props: { today },
  };
};

const HomePage = ({ today }: Props): JSX.Element => {
  return (
    <div className="container">
      <h1>{today}</h1>
    </div>
  );
};

export default HomePage;

