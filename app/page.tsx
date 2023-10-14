import Image from 'next/image'
import ServerStatus from './components/ServerStatus'

export default function Home() {
  return (
    <main className="flex flex-col bg-[#1a1a1a] min-h-screen items-center justify-center overflow-hidden">
      <div className='flex items-center justify-center w-full md:text-[90px] text-2xl md:p-10'>✨🐾 Waifu No Weebs 🐾✨</div>
      <div className='flex items-center justify-center w-full md:text-[60px] text-xl md:p-5'>Minecraft Server</div>

      <ServerStatus />
    </main>
  )
}
