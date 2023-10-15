import Feed from './feed'
import { Suspense } from 'react'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">

        <Suspense fallback={<p className='text-2xl font-bold'>Loading data with a delay of 2s ... </p>}>
          <Feed delay={2000} />
        </Suspense>

      </div>
    </main>
  )
}
