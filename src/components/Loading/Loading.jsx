const Loading = () => {
  return (
    <div className="flex items-center justify-center py-16">
      <div className="relative">
        {/* Main Loading Card */}
        <div className="bg-white/10 backdrop-blur-xl rounded-3xl border border-white/20 shadow-2xl p-12 max-w-md mx-auto">
          
          {/* Animated Weather Icon */}
          <div className="relative mb-8">
            {/* Cloud Container */}
            <div className="relative mx-auto w-24 h-16">
              {/* Cloud Base */}
              <div className="absolute w-20 h-8 bg-white/90 rounded-full top-2 left-2 shadow-lg"></div>
              <div className="absolute w-12 h-12 bg-white/90 rounded-full top-0 left-6 shadow-lg"></div>
              <div className="absolute w-16 h-16 bg-white/90 rounded-full top-0 left-0 shadow-lg"></div>
              
              {/* Animated Rain Drops */}
              <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-1">
                {[...Array(4)].map((_, i) => (
                  <div
                    key={i}
                    className="w-1.5 h-4 bg-cyan-400/80 rounded-full animate-bounce"
                    style={{
                      animationDelay: `${i * 0.2}s`,
                      animationDuration: '1s'
                    }}
                  ></div>
                ))}
              </div>
            </div>
            
            {/* Pulsing Ring Effect */}
            <div className="absolute inset-0 rounded-full border-2 border-cyan-400/30 animate-ping"></div>
          </div>

          {/* Loading Text */}
          <div className="text-center space-y-4">
            <h3 className="text-xl font-semibold text-white mb-2">
              Analyzing Weather Data
            </h3>
            
            <p className="text-blue-100/70 font-light leading-relaxed">
              Fetching real-time meteorological information from global sensors
            </p>
            
            {/* Progress Bar */}
            <div className="w-full bg-white/10 rounded-full h-2 mt-6">
              <div 
                className="bg-gradient-to-r from-cyan-400 to-blue-500 h-2 rounded-full animate-pulse"
                style={{
                  animation: 'progress 2s ease-in-out infinite'
                }}
              ></div>
            </div>
            
            {/* Status Indicators */}
            <div className="flex justify-center items-center space-x-6 mt-6 pt-4 border-t border-white/10">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-green-400 text-xs font-medium">CONNECTED</span>
              </div>
              
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
                <span className="text-cyan-400 text-xs font-medium">PROCESSING</span>
              </div>
            </div>
          </div>
        </div>

        {/* Floating Particles */}
        <div className="absolute -top-4 -left-4 w-8 h-8 bg-blue-400/20 rounded-full animate-float"></div>
        <div className="absolute -bottom-4 -right-4 w-6 h-6 bg-cyan-400/20 rounded-full animate-float" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 -right-6 w-4 h-4 bg-purple-400/20 rounded-full animate-float" style={{animationDelay: '2s'}}></div>
      </div>
    </div>
  );
};

export default Loading;