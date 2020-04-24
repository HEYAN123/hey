import jss from 'jss';
import preset from 'jss-preset-default';
import { primary_padding, primary_margin } from '../../styles';

jss.setup(preset());

const styles = {
    default: `
      display: flex;
      padding: ${primary_padding};
      margin: ${primary_margin};
    `,
};

const { classes } = jss.createStyleSheet(styles).attach();

export default classes;