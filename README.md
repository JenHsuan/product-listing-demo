# Product Listing Demo Project
### Description
It's an e-commerce demo page for the product listing which is made by Next.js, React, and Styled-Components. I will introduce the demo site, usages, and stacks I used in this document.

### Requirements
1. Implement item cell template (include portrait and landscape image container)
2. Implement the layout of the product listing page
3. Implement the interactions of the product listing page
#### Demo site
* https://product-listing-demo-seanhsieh.netlify.app/

### Keywords
Next.js, React, Styled-Components, e-commerce


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

### Testing
There are few items I test in this project
* For Redux actions and reducers
* For components: only snapshots test
* For pages: only snapshots test

```

npm run test

```

### Technical stacks
* ReactJS
* Redux (middleware: Redux-thunk)
* Next.js
```

The reason to use this framework is to achieve pre-rendering to optimize the performance. Also, I can add something in the head section to improve SEO like description, author, keywords, etc.

```
* Styled-components

```

The reason to use this framework is that it can help me to avoid CSS pollution. Also, it has already done the CSS reset and it's convenient to use.

```

* Jest
