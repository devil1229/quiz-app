import Landing from '@/components/Landing'
import Participate from '@/components/Participate'
import Ready from '@/components/Ready'
import Submit from '@/components/Submit'
import Question from '@/components/Question'
import Image from 'next/image'
import Leaderboard from '@/components/Leaderboard'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      {/* <Landing /> */}
      {/* <Participate /> */}
      {/* <Ready /> */}
      {/* <Submit /> */}
      {/* <Question /> */}
      <Leaderboard />
    </main>
  )
}
