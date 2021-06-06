# Product Listing Demo Project
## Description
It's an e-commerce demo page for the product listing which is made by Next.js, React, and Styled-Components. The document introduces the demo site, usages, and stacks I used.

## Keywords
Next.js, React, Styled-Components, e-commerce

## Demo
* https://product-listing-demo-seanhsieh.netlify.app/

## Developer Environment setting
### Usages

* Installation

```

npm install

```

* Launch

```

npm run dev

```

* build the static resources

```

npm run build && npm run export

```

## Testing
There are few items I test in this project
* Redux actions and reducers
* Components: only snapshots test
* Pages: only snapshots test

### Usages

```

npm run test

```

### Stacks
* ReactJS
* Redux (middleware: Redux-thunk)
* Next.js
The reason to use this framework is to achieve pre-rendering to optimize the performance. Also, I can add something in the head section to improve SEO like description, author, keywords, etc.
* Styled-components
The reason to use this framework is that it can help me to avoid CSS pollution. Also, it has already done the CSS reset and it's convenient to use.
* Jest
