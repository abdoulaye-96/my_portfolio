import Link from 'next/link'

export default function NotFound() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center px-4">
      <p className="section-number text-cyan-400 mb-4">404</p>
      <h1 className="text-4xl sm:text-5xl font-bold mb-4">
        This page <span className="gradient-text">doesn&apos;t exist</span>
      </h1>
      <p className="text-slate-400 max-w-md mb-8">
        The page you&apos;re looking for was moved, deleted, or never existed.
      </p>
      <Link
        href="/"
        className="px-6 py-3 bg-cyan-500 hover:bg-cyan-400 text-black font-semibold rounded-xl transition-colors duration-200"
      >
        Back to home
      </Link>
    </section>
  )
}
