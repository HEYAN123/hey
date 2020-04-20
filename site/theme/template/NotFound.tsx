import React from 'react';
import { Link } from 'bisheng/router';
import { Result, Button } from 'hey-design';
import { HomeOutlined } from '@ant-design/icons';
import * as utils from './utils';

export interface NotFoundProps {
  location: {
    pathname: string;
    search: string;
    hash: string;
    state: any;
    action: string;
    key: any;
    basename: string;
    query: Record<string, string>;
  };
  router: {
    push: (pathname: string) => void;
    replace: (pathname: string) => void;
  };
}

export default function NotFound(props: NotFoundProps) {
  const {
    location: { pathname },
  } = props;

  const isZhCN = utils.isZhCN(pathname);

  return (
    <div id="page-404">
      <section>
        <Result
          status="404"
          title="404"
          subTitle={
            isZhCN ? '你访问的页面貌似不存在？' : 'Sorry, the page you visited does not exist.'
          }
          extra={
            <Link to={utils.getLocalizedPathname('/hey/index', isZhCN)}>
              <Button type="primary" icon={<HomeOutlined />}>
                {isZhCN ? '返回 Hey Design 首页' : 'Back to home page'}
              </Button>
            </Link>
          }
        />
      </section>
      <style
        dangerouslySetInnerHTML={{
          __html: '#react-content { height: 100%; background-color: #fff }',
        }}
      />
    </div>
  );
}
