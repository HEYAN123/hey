/* eslint-disable react/button-has-type */
import * as React from 'react';
import classNames from 'classnames';
import Button from '../button';
import s from './style';

export interface DivProps {
  className?: string; // 样式类名
  handleClick?: any; // 点击事件
  handleLoad?: any; // 请求方法
  status?: string; // 数据状态
  failContent?: React.ReactNode // 请求失败时占位组件
  loadingContent?: React.ReactNode // 请求进行中时占位组件
  children?: React.ReactNode; // 正常显示的
}

class Div extends React.Component<DivProps> {

  static defaultProps = {
    // 默认的失败组件
    failContent:
    <div className={s.failCon}>
      <Button className={s.retry}>点击重试</Button>
    </div>,
    // 默认的loading组件
    loadingContent:
    <div className={s.loadingCon}>
      <div className={s.loadingTip} />
      <div className={s.loadingTip} />
      <div className={s.loadingTip} />
      <div className={s.loadingTip} />
    </div>
    ,
    status: '',
  };

  constructor(props: DivProps) {
    super(props);
    this.state = {};
  }

  handleClick: React.MouseEventHandler<HTMLButtonElement | HTMLAnchorElement> = e => {
    const { handleClick } = this.props;
    if (handleClick) {
      (handleClick as React.MouseEventHandler<HTMLButtonElement | HTMLAnchorElement>)(e);
    }
  };

  // 内容渲染
  renderContent() {
    const {
      status,
      handleLoad,
      loadingContent,
      failContent,
      children,
    } = this.props;
    switch (status) {
      case '':
        return children;
      case 'loading':
        return loadingContent;
      case 'fail':
        return failContent ? 
        <div className={s.failCon}>
          <Button className={s.retry} onClick={handleLoad}>点击重试</Button>
        </div> :
        null;    
      default:
        return null;
    }
  }

  render() {
    const {
      handleClick,
      className,
    } = this.props;

    return (
      <div
        onClick={handleClick}
        className={classNames(s.default, className)}
      >
        {this.renderContent()}
      </div>
    );
  }
}

export default Div;
