import jss from 'jss';
import preset from 'jss-preset-default';
import { primary_color, primary_line_height, primary_font_size, primary_opc_color } from '../../styles';

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
    defaultLoading: {
      display: 'flex',
      alignItems: 'center',
      backgroundColor: `${primary_opc_color}`,
      borderRadius: 4,
      border: `1px solid ${primary_color}`,
      color: `${primary_color}`,
      fontSize: `${primary_font_size}`,
      lineHeight: `${primary_line_height}`,
      padding: '0px 4px',
      opacity: 0.6,
    },
    loading: {
      display: 'inline-block',
      width: 14,
      height: 14,
      border: `2px dotted ${primary_color}`,
      borderRadius: '100%',
      opacity: 0.6,
      marginRight: 4,
    },
    defaultDisabled: `
      border-radius: 4px;
      border: 1px solid ${primary_color};
      color: ${primary_color};
      background-color: ${primary_opc_color};
      font-size: ${primary_font_size};
      line-height: ${primary_line_height};
      opacity: 0.6;
      padding: 0 4px;
    `,
};

const { classes } = jss.createStyleSheet(styles).attach();

export default classes;