import * as React from 'react';
import { Button } from 'hey-design';
import { Link } from 'bisheng/router';
import { FormattedMessage, useIntl } from 'react-intl';
import { PlayCircleFilled } from '@ant-design/icons';
import { getLocalizedPathname } from '../../utils';
import Logo from './Logo';

import './index.less';

export default function Banner() {
  const { locale } = useIntl();
  const isZhCN = locale === 'zh-CN';

  return (
    <div className="home-banner">

      <div className="home-banner-holder">
        <div className="home-banner-content">
          <div>
            <Logo />
          </div>
          <p>
            <FormattedMessage id="app.home.introduce" />
          </p>

          <a className="banner-video">
            <PlayCircleFilled /> <FormattedMessage id="app.home.play-video" />
          </a>

          <div className="home-banner-content-operations">
            <Link to={getLocalizedPathname('/hey/docs/react/introduce', isZhCN)}>
              <Button ghost shape="round">
                <FormattedMessage id="app.home.getting-started" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
