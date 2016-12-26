# Snakke
>  Reading Position Indicator written in VanillaJS

## Features

- Simple aproach
- No dependencies
- Only `~220 bytes` minified
- [UMD support](https://github.com/umdjs/umd)

## How to use

1. Download the [latest version](https://github.com/diogomoretti/snakke/releases)

2. Add `snakke.min.js` (`src` folder on `zip` file) before the closing body tag:

```html
<script src="path/to/snakke.min.js"></script>
```

3. Call Snakke:

```html
<script>
  snakke()
</script>
```

4. Add simple rule in your CSS:

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

<hr>

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

## License
[MIT License](https://github.com/diogomoretti/MITLicense) :copyright: [Diogo Moretti](https://github.com/diogomoretti)
