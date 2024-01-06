import Landing from '@/components/Landing'
import Participate from '@/components/Participate'
import Ready from '@/components/Ready'
import Submit from '@/components/Submit'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {/* <Landing /> */}
      {/* <Participate /> */}
      {/* <Ready /> */}
      <Submit />
    </main>
  )
}
