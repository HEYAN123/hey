import * as React from 'react';
import { Link } from 'bisheng/router';
import * as utils from '../../utils';
import icon from '../../icon.png';
import './Logo.less';

export default () => (
  <h1>
    <Link to={utils.getLocalizedPathname('/', true)} id="logo">
      <img alt="logo" src={icon} />
      Hey Design
    </Link>
  </h1>
);
