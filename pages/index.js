import Head from 'next/head';
import ItemCellPage from '../components/ItemCellPage';

import dog1 from '../public/images/dog/dog1.jpg';

export default function index() {
  const title = "E-Commerce Product Listing Demo Site";
  const description = "It's a demo website for the product listing which is made by Next.js, React, and Styled-Components";
  return (
    <>
      <Head>
        <title>{title }</title>
        <meta name="description" content={description} />
        <meta name="keywords" content="Next.js, React, Styled-Components, e-commerce" />
        <meta name="author" content="Jen-Hsuan Hsieh (Sean Hsieh)"/>
        <meta property="og:title" content={title}/>
        <meta property="og:url" content="https://product-listing-demo-seanhsieh.netlify.app/"/>
        <meta property="og:image" content={dog1}/>
        <meta property="og:description" content={description}/>
      </Head>
      <ItemCellPage/>
    </>
  )
}
