export function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Background blur effects */}
      <div className="absolute top-1/4 left-0 w-64 h-64 eldritch-bg-purple/20 rounded-full filter blur-[80px] animate-pulse-slow"></div>
      <div className="absolute bottom-1/3 right-0 w-72 h-72 eldritch-bg-green/10 rounded-full filter blur-[100px] animate-pulse-slow"></div>
      <div className="absolute top-1/2 left-1/3 w-48 h-48 eldritch-bg-blue/15 rounded-full filter blur-[60px] animate-pulse-slow"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 relative z-10">
        <div className="text-center">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight animate-shimmer">
            <span className="eldritch-text-purple inline-block animate-float-slow">E</span>
            <span className="eldritch-text-red inline-block animate-float" style={{animationDelay: "0.2s"}}>l</span>
            <span className="eldritch-text-yellow inline-block animate-float-slow" style={{animationDelay: "0.4s"}}>d</span>
            <span className="eldritch-text-green inline-block animate-float" style={{animationDelay: "0.6s"}}>r</span>
            <span className="eldritch-text-cyan inline-block animate-float-slow" style={{animationDelay: "0.8s"}}>i</span>
            <span className="eldritch-text-blue inline-block animate-float" style={{animationDelay: "1s"}}>t</span>
            <span className="eldritch-text-pink inline-block animate-float-slow" style={{animationDelay: "1.2s"}}>c</span>
            <span className="eldritch-text-purple inline-block animate-float" style={{animationDelay: "1.4s"}}>h</span>
          </h1>
          <p className="mt-6 text-xl md:text-2xl eldritch-text-foreground/80 animate-float-slow">
            A haunting color scheme for your code editor
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-6">
            <a 
              href="#palette" 
              className="inline-flex items-center px-8 py-3 border border-transparent text-lg font-medium rounded-md shadow-lg eldritch-text-background eldritch-bg-purple hover:bg-opacity-90 transition duration-300 transform hover:scale-105 hover:shadow-xl"
            >
              Explore the Palette
            </a>
            <a 
              href="#installation" 
              className="inline-flex items-center px-8 py-3 border eldritch-border-purple text-lg font-medium rounded-md eldritch-text-purple bg-[#1a1a1a]/70 backdrop-blur-sm hover:eldritch-bg-purple/10 transition duration-300 transform hover:scale-105"
            >
              Installation
            </a>
          </div>
        </div>
      </div>
      
      {/* Floating elements */}
      <div className="absolute top-20 left-10 w-6 h-6 eldritch-bg-purple/60 rounded-full filter blur-sm animate-float"></div>
      <div className="absolute top-40 right-20 w-4 h-4 eldritch-bg-green/60 rounded-full filter blur-sm animate-float-slow"></div>
      <div className="absolute bottom-20 left-1/4 w-3 h-3 eldritch-bg-pink/60 rounded-full filter blur-sm animate-float-fast"></div>
      <div className="absolute bottom-40 right-1/3 w-5 h-5 eldritch-bg-blue/60 rounded-full filter blur-sm animate-float"></div>
      <div className="absolute top-1/3 left-1/2 w-4 h-4 eldritch-bg-yellow/60 rounded-full filter blur-sm animate-float-slow"></div>
    </section>
  );
}
