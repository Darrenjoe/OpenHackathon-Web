import { t } from 'i18next';
import type { InferGetServerSidePropsType } from 'next';

import PageHead from '../../../../../../components/PageHead';
import { WorkEdit } from '../../../../../../components/work/WorkEdit';
import { withRoute } from '../../../../../api/core';

export const getServerSideProps = withRoute<Record<'name' | 'tid', string>>();

export default function WorkCreatePage({
  route: { params },
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <>
      <PageHead title={t('submit_work')} />

      <WorkEdit {...params!} />
    </>
  );
}