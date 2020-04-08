import React from 'react'
import Head from 'next/head'

import withPosts, { sortByDate } from 'nextein/posts'

import Layout from '../components/layout'
import Container from '../components/container'
import Hero from '../components/hero'
import Grid from '../components/grid'

export default withPosts(({ posts }) => {
  posts.sort(sortByDate)
  const [heroPost, featured, side, ...morePosts] = posts

  return (
    <Layout>
      <Head>
        <title>elmasse | Home</title>
      </Head>
      <div className="hero">
        <Container>
          {heroPost && <Hero post={heroPost}/>}
        </Container>
      </div>
      <div className="grid">
        <Container>
          <Grid featured={featured} side={side} posts={morePosts} />
        </Container>
      </div>
      <style jsx>{`
        .hero {
          /* background by SVGBackgrounds.com */
          background-image: url("/static/images/wavey-fingerprint-1.svg");
          background-attachment: fixed;
        }
        .grid {
          margin-top: 4rem;
          margin-bottom: 8rem;
        }

        @media (max-width: 780px) {
          .grid { margin: 0; }
          .grid :global(.container) {
            padding 0;
          }
        }
      `}</style>
    </Layout>
  )
})
