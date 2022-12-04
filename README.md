# Moegi Theme for VSCode

[![marketplace](https://img.shields.io/visual-studio-marketplace/v/ddiu8081.moegi-theme?label=Marketplace&style=for-the-badge)](https://marketplace.visualstudio.com/items?itemName=ddiu8081.moegi-theme)
[![Preview in vscode.dev](https://img.shields.io/badge/preview%20in-vscode.dev-blue?style=for-the-badge)](https://vscode.dev/theme/ddiu8081.moegi-theme)

![Moegi Dark](./images/screenshot.png)

> Font: [Zed Mono Extended](https://github.com/zed-industries/zed-fonts)

## Features

- Two accent colors in one theme - unsaturated cold green (`#66b395`) and... light warm red (`#ff8787`)
- No flat ui - you work in a real editor instead of on a whiteboard
- MacOS native title bar adaptation - pure gray ui without color bias
- Optimized for text selection and search

## Themes

| Theme | Preview | Description |
| --- | --- | --- |
| Moegi Dark | ![Moegi Dark](./images/moegi-dark.png) | A pure dark theme. |
| Moegi Black | ![Moegi Black](./images/moegi-black.png) | A pure dark theme but more black. |
| Moegi Dark Vitesse | ![Moegi Dark Vitesse](./images/moegi-dark-vitesse.png) | [Vitesse](https://github.com/antfu/vscode-theme-vitesse) stylized dark theme |
| Moegi Light |  | // TODO |
| Moegi Dark Monochrome |  | // TODO |
| Moegi Light Monochrome |  | // TODO |

## Installation

1. Open **Extensions** sidebar panel in Visual Studio Code.
2. Search for `Moegi Theme`.
3. Click **Install** to install it.

## Customization

You can customize the theme by adding snippets to `settings.json` (`Command Palette` -> `Preferences: Open Settings (JSON)`)

> For more information, please refer to [Theme Color Reference](https://code.visualstudio.com/api/references/theme-color)

### Enable Italics on Comments

```json
"editor.tokenColorCustomizations": {
  "[Moegi Dark][Moegi Black]": {
    "textMateRules": [
      {
        "name": "Comment Italics",
        "scope": [
          "comment",
          "punctuation.definition.comment"
        ],
        "settings": {
          "fontStyle": "italic"
        }
      }
    ]
  }
}
```

### Enable Bold on Keywords

```json
"editor.tokenColorCustomizations": {
  "[Moegi Dark][Moegi Black]": {
    "textMateRules": [
      {
        "name": "Keyword Bold",
        "scope": [
          "keyword",
          "storage.type",
          "storage.modifier",
        ],
        "settings": {
          "fontStyle": "bold" // If you want to enable italics as well, use "bold italic"
        }
      }
    ]
  }
}
```

## Credits

- Language examples are from [atom/language-examples](https://github.com/atom/language-examples).

## License

MIT
