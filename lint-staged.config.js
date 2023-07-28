module.exports = {
  // this will check Typescript files
  '**/*.(ts|tsx)': 'yarn tsc --noEmit',

  // This will lint and format TypeScript and
  '**/*.(ts|tsx)': filenames => [
    `npm run eslint --fix ${filenames.join(' ')}`,
    `npm run prettier --write ${filenames.join(' ')}`,
  ],

  // this will Format MarkDown and JSON
  '**/*.(md|json)': filenames => `yarn prettier --write ${filenames.join(' ')}`,
};
