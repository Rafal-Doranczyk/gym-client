module.exports = {
  // this will check Typescript files
  '**/*.(ts|tsx)': 'npm run tsc --noEmit',

  // This will lint and format TypeScript and
  '**/*.(ts|tsx)': filenames => [
    `npm run lint`,
    `npm run prettier`,
  ],

  // this will Format MarkDown and JSON
  '**/*.(md|json)': filenames => `npm run prettier --write ${filenames.join(' ')}`,
};
