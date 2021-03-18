const fs = require('fs');
const path = require('path');
const lessToJS = require('less-vars-to-js');

const CracoLessPlugin = require('craco-less');

const {
  getThemeVariables,
} = require('antd/dist/theme');

const themePath = path.join(__dirname, 'src/assets/less/antd/theme.less');
const themeVariables = lessToJS(fs.readFileSync(themePath, 'utf8'));

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            javascriptEnabled: true,
            modifyVars: {
              ...getThemeVariables({
                dark: true,
                compact: true,
              }),
              ...themeVariables
            },
          },
        },
      },
    },
  ],
};
