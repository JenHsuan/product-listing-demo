import Head from 'next/head';
import ItemCellPage from '../components/ItemCellPage';


export default function index() {
  return (
    <>
      <Head>
        <title>e-commerce Product Listing Demo Site</title>
        <meta name="description" content="It's a demo website for the product listing which is made by Next.js, React, and Styled-Components" />
        <meta name="keywords" content="Next.js, React, Styled-Components, e-commerce" />
        <meta name="author" content="Jen-Hsuan Hsieh (Sean Hsieh)"/>
      </Head>
      <ItemCellPage/>
    </>
  )
}
