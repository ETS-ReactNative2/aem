import { fetchFromAEM } from '../../utils';

/* eslint-disable no-param-reassign */
export const getClientlibContent = async (file) => {
  /* eslint-disable no-plusplus, no-await-in-loop */
  const cssResponse = await fetchFromAEM({ url: `${file.path}.css` });
  const jsResponse = await fetchFromAEM({ url: `${file.path}.js` });
  const response = {
    js: {
      path: `${file.path}.js`,
      content: await jsResponse.text(),
    },
    css: {
      path: `${file.path}.css`,
      content: await cssResponse.text(),
    }
  };
  return response;
};
