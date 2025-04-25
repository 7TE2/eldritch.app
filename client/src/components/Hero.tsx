export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            <span className="eldritch-text-purple">E</span>
            <span className="eldritch-text-red">l</span>
            <span className="eldritch-text-yellow">d</span>
            <span className="eldritch-text-green">r</span>
            <span className="eldritch-text-cyan">i</span>
            <span className="eldritch-text-blue">t</span>
            <span className="eldritch-text-pink">c</span>
            <span className="eldritch-text-purple">h</span>
          </h1>
          <p className="mt-4 text-xl md:text-2xl eldritch-text-foreground/80">A haunting color scheme for your code editor</p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a href="#palette" className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm eldritch-text-background eldritch-bg-purple hover:bg-opacity-90 transition">
              Explore the Palette
            </a>
            <a href="#installation" className="inline-flex items-center px-6 py-3 border eldritch-border-purple text-base font-medium rounded-md eldritch-text-purple bg-transparent hover:eldritch-bg-purple/10 transition">
              Installation
            </a>
          </div>
        </div>
      </div>
      {/* Decorative Elements */}
      <div className="absolute top-1/4 left-0 w-32 h-32 eldritch-bg-purple/20 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-1/4 right-0 w-40 h-40 eldritch-bg-green/10 rounded-full filter blur-3xl"></div>
    </section>
  );
}
