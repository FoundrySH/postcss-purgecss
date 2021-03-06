# PostCSS Purgecss
[![Build Status](https://travis-ci.org/FoundrySH/postcss-purgecss.svg?branch=master)](https://travis-ci.org/FoundrySH/postcss-purgecss)
[![CircleCi](https://circleci.com/gh/FoundrySH/postcss-purgecss/tree/master.svg?style=shield)]()
[![dependencies Status](https://david-dm.org/foundrysh/postcss-purgecss/status.svg)](https://david-dm.org/foundrysh/postcss-purgecss)
[![devDependencies Status](https://david-dm.org/foundrysh/postcss-purgecss/dev-status.svg)](https://david-dm.org/foundrysh/postcss-purgecss?type=dev)
[![Codacy Badge](https://api.codacy.com/project/badge/Grade/d33de778a87140cfbaff6478ad134042)](https://www.codacy.com/app/FoundrySH/postcss-purgecss?utm_source=github.com&utm_medium=referral&utm_content=FoundrySH/postcss-purgecss&utm_campaign=Badge_Grade)
[![Codacy Badge](https://api.codacy.com/project/badge/Coverage/d33de778a87140cfbaff6478ad134042)](https://www.codacy.com/app/FoundrySH/postcss-purgecss?utm_source=github.com&utm_medium=referral&utm_content=FoundrySH/postcss-purgecss&utm_campaign=Badge_Coverage)
[![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg)](https://github.com/prettier/prettier)
[![npm](https://img.shields.io/npm/v/postcss-purgecss.svg)](https://www.npmjs.com/package/postcss-purgecss)
[![license](https://img.shields.io/github/license/foundrysh/postcss-purgecss.svg)]()

[PostCSS] plugin for PurgeCSS.

[PostCSS]: https://github.com/postcss/postcss

## Usage

```js
const purgecss = require('postcss-purgecss')
postcss([
  purgecss({
    content: ['./src/**/*.html']
  })
])
```

See [PostCSS] docs for examples for your environment.

## Options

All of the options of purgecss are available to use with the plugins.
You will find below the main options available. For the complete list, go to the [purgecss documentation website](https://www.purgecss.com/configuration.html#options).

### `content` (**required**)
Type: `string | Object`

You can specify content that should be analyzed by Purgecss with an array of filenames or globs. The files can be HTML, Pug, Blade, etc.

### `extractors`
Type: `Array<Object>`

Purgecss can be adapted to suit your needs. If you notice a lot of unused CSS is not being removed, you might want to use a custom extractor.
More information about extractors [here](https://www.purgecss.com/extractors.html).

### `whitelist`
Type: `Array<string>`

You can whitelist selectors to stop Purgecss from removing them from your CSS. This can be accomplished with the options whitelist and whitelistPatterns.

### `whitelistPatterns`
Type: `Array<RegExp>`

You can whitelist selectors based on a regular expression with whitelistPatterns.

### `keyframes`
Type: `boolean`
Default value: `false`

If you are using a CSS animation library such as animate.css, you can remove unused keyframes by setting the keyframes option to true.

#### `fontFace`
Type: `boolean`
Default value: `false`

If there are any unused @font-face rules in your css, you can remove them by setting the fontFace option to true.

## Contributing

Please read [CONTRIBUTING.md](./CONTRIBUTING.md) for details on our code of
conduct, and the process for submitting pull requests to us.

## Versioning

postcss-purgecss use [SemVer](http://semver.org/) for versioning.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file
for details.
