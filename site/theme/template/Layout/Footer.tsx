// 页脚

import React from 'react';
import { Footer as OrgFooter } from 'hey-design';
// import RcFooter from 'rc-footer'; OWN

function Footer() {
    return (
      <OrgFooter className="footer">
        <p>Made with <span style={{ color: 'rgb(0, 0, 0)' }}>❤</span> by He Yan</p>
      </OrgFooter>
    );
}

export default Footer;
