export default function NotFound() {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-background">
      <div className="text-9xl font-bold text-primary">404</div>
      <div className="text-6xl font-medium">
        Page not found
      </div>
      <p className="text-center text-xl text-primary-foreground mt-4">
        Sorry, we couldn't find what you were looking for.
      </p>
      <a
        href="/"
        className="mt-8 w-fit !px-6 !py-3 rounded-md bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
      >
        Go back home
      </a>
    </div>
  );
}

