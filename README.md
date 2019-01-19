# Create React App with HET-Support

[Create React App](https://github.com/facebook/create-react-app), configured via [craco](https://github.com/sharegate/craco), with **H**ot-Module-Replacement, **E**motion-css-prop and **T**ypeScript-support.

## usage

```bash
mkdir your-project
cd your-project
yarn create craco-het
```

## details

- [Hot Module Replacement (HMR)](https://webpack.js.org/guides/hot-module-replacement/) via [React Hot Loader](https://webpack.js.org/guides/hot-module-replacement/) + [react-🔥-dom](https://github.com/hot-loader/react-dom)
- [emotions `css`-prop via the babel-preset](https://emotion.sh/docs/css-prop#babel-preset)
- [TypeScript via CRA](https://facebook.github.io/create-react-app/docs/adding-typescript)

And for a better dx:

- [prettier](https://github.com/prettier/prettier) as devDependency, check [Editor Integration](https://prettier.io/docs/en/editors.html) to integrate prettier in your IDE
- (COMING SOON!) eslint for [TypeScript](https://github.com/typescript-eslint/typescript-eslint)

