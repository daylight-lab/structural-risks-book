# Structural Risks Book

A book that documents structural risks to the global internet.

See a live version at [https://daylight-lab.github.io](https://daylight-lab.github.io).

# Contributing

This book is open source, and contributions are welcome. 

Simply fork this repository and make a PR.

## Development

You'll need `yarn`.

### Install

``` sh
git@github.com:daylight-lab/structural-risks-book.git
cd structural-risks-book/docs
yarn install
```

### Run

``` sh
cd structural-risks-book/docs
yarn dev
```

This will run a local version of the book at `http://localhost:8080`. Edit any of the markdown files; the page will automatically refresh to reflect the changes.

See the [Vuepress](https://vuepress.vuejs.org/) docs for more information.


### Style guide

- No abbreviations in headings.

## Threat models
- Each technology-specific page should include a list of threat models as an H2. 
- Each threat model should list a "Potential impact" section as an H3.

## License

BSD-3
