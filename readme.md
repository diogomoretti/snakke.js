<p align="center">
  <img src="https://camo.githubusercontent.com/4dee5e97525c02e232231a0b7f23422e13191eb3/68747470733a2f2f7261776769742e636f6d2f64696f676f6d6f72657474692f736e616b6b652f6d61737465722f5f776562736974652f736e616b6b652d6c6f676f2e706e67" alt="Snakke" width="230" />
</p>
<hr>
[![Build Status](https://travis-ci.org/diogomoretti/snakke.svg?branch=master)](https://travis-ci.org/diogomoretti/snakke)
[![Dependency Status](https://img.shields.io/david/dev/diogomoretti/snakke.svg)](https://david-dm.org/diogomoretti/snakke?type=dev)
[![Standard - JavaScript Style Guide](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com)
[![GitHub tag](https://img.shields.io/github/tag/diogomoretti/snakke.svg)](https://github.com/diogomoretti/snakke/releases)

>  Reading Position Indicator written in VanillaJS

## Features

- Simple aproach
- No dependencies
- `< 1kb` minified
- [UMD support](https://github.com/umdjs/umd)

## How to use

**1** :heavy_minus_sign: Download the [latest release](https://github.com/diogomoretti/snakke/releases)

**2** :heavy_minus_sign: Add `snakke.min.js` (`src` folder on `zip` file) before the closing body tag:

```html
<script src="path/to/snakke.min.js"></script>
```

**3** :heavy_minus_sign: Call Snakke:

```html
<script>
  snakke()
</script>
```

**4** :heavy_minus_sign: Add simple rule in your CSS:

```css
.snakke-bar {
  /* Required style */
  position: fixed;
  top: 0;
  left: 0;
  transition: width .3s ease;
  /* Below, your bar style */
  height: 5px;
  background: #2ecc71;
}
```

<hr>

## Development

- `gulp server` :heavy_minus_sign: Server to development (Go to [http://localhost:7000](http://localhost:7000))
- `gulp build` :heavy_minus_sign: Generate `snakke.min.js`
- `gulp tag` :heavy_minus_sign: Release a new version

<hr>

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

## License
[MIT License](https://github.com/diogomoretti/MITLicense) :copyright: [Diogo Moretti](https://github.com/diogomoretti)
