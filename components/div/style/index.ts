import jss from 'jss';
import preset from 'jss-preset-default';
import { primary_padding, primary_margin } from '../../styles';

jss.setup(preset());

const styles = {
  default: `
    display: flex;
    margin: ${primary_margin};
  `,
  failCon: `
    background-color: #ddd;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  `,
  '@keyframes skeletonLoading': {
    '0%': {
      backgroundPosition: '100% 50%',
    },
    '100%': {
      backgroundPosition: '0 50%',
    },
  },
  loadingCon: {
    background: 'linear-gradient(90deg, #f5f5f5 25%, #eee 37%, #f5f5f5 63%)',
    backgroundSize: '400% 100%',
    animation: `$skeletonLoading 1.4s ease infinite`,
    width: '100%',
    height: '100%',
  },
  retry: `
    opacity: 0.6;
    border-radius: 30px;
    background: transparent;
    padding: 2px 8px;
  `,
};

const { classes } = jss.createStyleSheet(styles).attach();

export default classes;