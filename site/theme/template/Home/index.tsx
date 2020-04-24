import * as React from 'react';
import { FormattedMessage } from 'react-intl';
import Banner from './Banner';
import RecommendPage from './RecommendPage';
import Footer from '../Layout/Footer';
import './index.less';

function getStyle() {
  return `
    .rc-footer-container {
      padding-left: 0;
      padding-right: 0;
    }

    .rc-footer-columns {
      max-width: 1208px;
      margin: 0 auto;
    }
  `;
}

interface BlockContentProps {
  title: React.ReactNode;
  extra?: React.ReactNode;
}

const BlockContent: React.FC<BlockContentProps> = ({ title, children, extra }) => (
  <div className="home-block-content">
    <div>
      <p className="special">{title}</p>
      {extra && <div className="home-block-content-extra">{extra}</div>}
    </div>
    {children}
  </div>
);

export default function Home() {
  return (
    <div className="home-container">
      <style dangerouslySetInnerHTML={{ __html: getStyle() }} /> {/* eslint-disable-line */}
      <Banner />
      <div style={{ maxWidth: 1256, margin: '0 auto' }}>
        <BlockContent title={<FormattedMessage id="app.home.special" />}>
          <RecommendPage />
        </BlockContent>
      </div>
      <Footer />
    </div>
  );
}
