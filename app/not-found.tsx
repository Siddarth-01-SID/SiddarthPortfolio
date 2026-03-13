import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-6">
      <div className="max-w-md text-center space-y-6">
        <h1 className="text-7xl font-normal">404</h1>
        <div className="space-y-2">
          <h2 className="text-xl font-medium">Page not found</h2>
          <p className="text-muted-foreground">
            The page you are looking for does not exist or has been moved.
          </p>
        </div>

        <Link
          href="/"
          className="inline-flex items-center gap-2 rounded-full border border-foreground bg-foreground text-background px-6 py-3 text-sm font-medium transition-all duration-300 hover:bg-foreground/90"
        >
          Go home
        </Link>
      </div>
    </div>
  )
}
