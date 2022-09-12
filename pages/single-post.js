import Head from 'next/head'
import Navbar from '../components/Navbar'
import ContentSinglePost from '../components/ContentSinglePost'
import Footer from '../components/Footer'

export default function SinglePost() {
  return (
    <div>
      <Head>
        <title>How To Make Blog on Next JS</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <main className="bg-white border-gray-200 dark:bg-gray-900">
        <ContentSinglePost />
      </main>
      <Footer />
    </div>
  )
}
