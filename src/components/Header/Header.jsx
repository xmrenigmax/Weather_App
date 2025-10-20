const Header = () => {
  return (
    <header className="relative overflow-hidden border-b border-white/10 bg-gradient-to-r from-slate-800/50 to-blue-900/50 backdrop-blur-xl">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-32 h-32 bg-blue-500/10 rounded-full blur-xl"></div>
        <div className="absolute top-0 right-0 w-24 h-24 bg-cyan-400/10 rounded-full blur-lg"></div>
        <div className="absolute bottom-0 left-1/2 w-40 h-40 bg-purple-500/10 rounded-full blur-xl"></div>
      </div>
      
      <div className="relative z-10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            {/* Logo Section */}
            <div className="flex items-center space-x-3 group cursor-pointer">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-300"></div>
                <div className="relative flex items-center justify-center w-12 h-12 bg-slate-900 rounded-full border border-white/10 shadow-lg">
                  <span className="text-xl">🌤️</span>
                </div>
              </div>
              <div>
                <h1 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-200 via-cyan-200 to-blue-300 bg-clip-text text-transparent">
                  SkyCast Pro
                </h1>
                <div className="flex items-center space-x-1">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-xs text-green-400 font-medium">LIVE</span>
                </div>
              </div>
            </div>

            {/* Tagline */}
            <div className="text-center md:text-right">
              <p className="text-sm md:text-base text-blue-100/80 font-light">
                Enterprise-grade weather analytics
              </p>
              <div className="flex items-center justify-center md:justify-end space-x-2 mt-1">
                <span className="text-xs text-cyan-300/70 bg-cyan-400/10 px-2 py-1 rounded-full border border-cyan-400/20">
                  Powered by Azure Cloud
                </span>
                <div className="hidden sm:flex items-center space-x-1 text-xs text-slate-400">
                  <span>•</span>
                  <span>Real-time Data</span>
                  <span>•</span>
                  <span>AI-Powered</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Subtle bottom gradient */}
      <div className="h-px bg-gradient-to-r from-transparent via-blue-400/30 to-transparent"></div>
    </header>
  );
};

export default Header;