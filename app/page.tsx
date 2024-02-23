import Image from 'next/image'
import ServerStatus from './components/ServerStatus'
import { Grandstander, KodchasanBold, mineHeading } from './lib/font'
export default function Home() {
  return (
    <main className="flex flex-col justify-center items-center min-h-screen bg-[#181818]">
     

<div className='leading-none tracking-tighter'>
<h1 className={`flex items-center text-[7vw] text-[#f3f3f3] justify-center w-full md:text-[6vw]  md:p-10 ${Grandstander.className}`}>
✨🐾 Waifu No Weebs 🐾✨
</h1>
<h2 className={`flex items-center justify-center w-full md:text-[#f3f3f3] text-[3vw] md:p-5 text-black ${mineHeading.className}`}>Minecraft Server</h2>
</div>


      <ServerStatus />
    </main>
  )
}
