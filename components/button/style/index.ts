import jss from 'jss';
import preset from 'jss-preset-default';
import { primary_color, primary_line_height, primary_font_size } from '../../styles';

jss.setup(preset());

const styles = {
    '@global': {
      body: {
        width: '100%',
        height: '100%',
      },
    },
    default: `
        border-radius: 4px;
        border: 1px solid ${primary_color};
        color: ${primary_color};
        font-size: ${primary_font_size};
        line-height: ${primary_line_height};
        padding: 0 4px;
    `,
};

const { classes } = jss.createStyleSheet(styles).attach();

export default classes;