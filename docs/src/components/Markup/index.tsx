'use client';

import { type Doc } from 'contentlayer/generated';
import { getMDXComponent } from 'next-contentlayer/hooks';

// TODO: Find better way to import CSS per docs page
import '@theomer77/omer-ui-styles/Button.css';

import styles from './index.module.css';

const Markup = ({ doc }: { doc: Doc }) => {
  const MdxContent = getMDXComponent(doc.body.code);

  return (
    <div className={styles.container}>
      <MdxContent />
    </div>
  );
};

export default Markup;
