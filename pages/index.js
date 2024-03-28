import Head from 'next/head'
import { MovieListProvider } from './MovieListContext'
import MovieList from './MovieList'

export default function Home () {
  return (
    <>
      <Head>
        <title>Provider Pattern</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Provider Pattern - Single Provider" />
      </Head>

      <main>
        <div className="header">
          <h3>Provider Pattern</h3>
        </div>

        <div>
          <pre>
            Single Provider
          </pre>
        </div>

        <div className="header">
          <h3 className="active">
            Movies
          </h3>
          <h3>
            <a href="/vegetables">
              Vegetables
            </a>
          </h3>
        </div>

        <MovieListProvider>
          <MovieList />
        </MovieListProvider>

      </main>
    </>
  )
}
