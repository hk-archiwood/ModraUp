# ModraUp
Free SketchUp-style 3D modeling software

The feature is currently under development. The operation feels just like Sketchup, and it also supports third-party plugins. Our own plugins are already running smoothly. It's coming soon and will be available to every user who needs it.


## Screenshot gallery

All seven language pages display six current screenshots: house shadows, scripted 3D text, section planes, terrain, and two views of an outdoor commercial building. Source images are kept in `NewScreenShots/`; the page assets are copied without pixel changes to `assets/`. Thumbnail switching, keyboard navigation, enlargement, rounded corners and the purple paint-tool overlay are retained.


## Languages

Use the language menu in the header to switch between:

- Simplified Chinese: `index.html`
- Traditional Chinese: `zh-hant.html`
- English: `en.html`
- Spanish: `es.html`
- French: `fr.html`
- Japanese: `ja.html`
- Korean: `ko.html`

Each page includes translated static text, metadata and accessibility labels. Gallery descriptions and the four interactive feature panels use `locale-en.js` for English or `locale-extra.js` for Traditional Chinese, Spanish, French, Japanese and Korean. Simplified Chinese content is provided by `demo.js`. Actual application screenshots are preserved in their original language. All pages share `styles.css` and `demo.js` and can be hosted directly on GitHub Pages without a build step.
