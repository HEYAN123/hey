import jss from 'jss';
import preset from 'jss-preset-default';

jss.setup(preset());

const styles = {
    '@global': {
      body: {
        width: '100%',
        height: '100%',
      },
    },
    container: `
        height: 50px;
        display: flex;
        justify-content: center;
        align-items: center;
    `,
};

const { classes } = jss.createStyleSheet(styles).attach();

export default classes;