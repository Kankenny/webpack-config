# Webpack Template

This webpack template/boilerplate was formatted according to colt steele's full webpack tutorial.

## Authors

-    [@kankenny](https://github.com/Kankenny)

## Features

-    Configurable webpack folder structure
-    Minification of HTML, JS, and CSS
-    HTML and style loaders
-    Asset modules in replacement of file loaders
-    Split development and production mode

## Issues

-    ***FIXED***  Some deprecated webpack features/syntax such as destructuring of the import of the merge function were replaced with updated syntax (enclosing merge with curly brackets) for it to function accordingly.

-    ***FIXED*** Cache-busting was attempted by the combination of content hashing of the dist-bundle files and the clean-webpack-plugin https://www.npmjs.com/package/clean-webpack-plugin. However, dist folder still remains even after every refresh.

     Changing the output:clean did not fix this. This unusual behavior is common and is still an open issue in this thread https://github.com/webpack/webpack-dev-middleware/issues/861

## Feedback

For any suggestions or assistance, please contact me @kmaddela@nyit.edu. Thank you!
