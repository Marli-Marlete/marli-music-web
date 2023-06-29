import { Logo } from '@/components/Logo'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex flex-col items-center">
        <h1 className="mb-3 text-2xl font-semibold">Marli Music Bot</h1>
        <Logo />
      </div>
    </main>
  )
}
