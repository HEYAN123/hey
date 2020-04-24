import jss from 'jss';
import preset from 'jss-preset-default';
import { primary_color, primary_font_size, primary_font_weight } from '../../../../components/styles';

jss.setup(preset());

const styles = {
    items: `
      width: 100%;
    `,
    item: `
      flex: 1;
      align-items: center;
      border: 1px solid ${primary_color};
    `,
    'item-pic': `
      font-size: 100px;
    `,
    'item-content': `
      flex-direction: column;
      height: 100%;
    `,
    'item-content-title': `
      font-size: 22px;
      font-weight: ${primary_font_weight};
      margin: 10px 0;
      padding: 0;
    `,
    'item-content-text': `
      font-size: ${primary_font_size}
    `,
};

const { classes } = jss.createStyleSheet(styles).attach();

export default classes;