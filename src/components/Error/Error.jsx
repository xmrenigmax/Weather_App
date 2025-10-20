const Error = ({ message, onRetry }) => {
  return (
    <div className="flex items-center justify-center py-16 px-4">
      <div className="relative w-full max-w-md">
        {/* Main Error Card */}
        <div className="bg-gradient-to-br from-red-500/10 to-orange-500/10 backdrop-blur-xl rounded-3xl border border-red-400/20 shadow-2xl p-8 relative overflow-hidden">
          
          {/* Animated Background Elements */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-1/4 left-1/4 w-20 h-20 bg-red-500 rounded-full blur-2xl"></div>
            <div className="absolute bottom-1/4 right-1/4 w-16 h-16 bg-orange-500 rounded-full blur-xl"></div>
          </div>

          {/* Error Icon */}
          <div className="relative z-10 text-center mb-6">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-red-500/20 rounded-2xl border border-red-400/30 mb-4">
              <span className="text-3xl">⚠️</span>
            </div>
            
            {/* Pulsing Ring */}
            <div className="absolute inset-0 rounded-full border-2 border-red-400/30 animate-ping"></div>
          </div>

          {/* Error Content */}
          <div className="relative z-10 text-center space-y-4">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-red-200 to-orange-200 bg-clip-text text-transparent">
              Connection Issue
            </h3>
            
            <p className="text-red-100/90 font-light leading-relaxed">
              We encountered a problem while fetching weather data
            </p>

            {/* Error Message Box */}
            <div className="bg-red-500/10 border border-red-400/30 rounded-xl p-4 mt-4">
              <p className="text-red-200 text-sm font-mono break-words">
                {message}
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 pt-4">
              <button 
                onClick={onRetry}
                className="flex-1 bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600 text-white font-medium py-3 px-6 rounded-xl shadow-lg hover:shadow-red-500/25 transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
              >
                <span className="text-lg">🔄</span>
                <span>Retry Connection</span>
              </button>
              
              <button 
                onClick={() => window.location.reload()}
                className="flex-1 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-medium py-3 px-6 rounded-xl backdrop-blur-sm transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
              >
                <span className="text-lg">🔄</span>
                <span>Refresh Page</span>
              </button>
            </div>

            {/* Troubleshooting Tips */}
            <div className="pt-4 mt-4 border-t border-red-400/20">
              <p className="text-red-200/60 text-xs font-light mb-2">Troubleshooting tips:</p>
              <div className="grid grid-cols-1 gap-1 text-left">
                <div className="flex items-center space-x-2 text-red-200/50 text-xs">
                  <span>•</span>
                  <span>Check your internet connection</span>
                </div>
                <div className="flex items-center space-x-2 text-red-200/50 text-xs">
                  <span>•</span>
                  <span>Verify the city name is correct</span>
                </div>
                <div className="flex items-center space-x-2 text-red-200/50 text-xs">
                  <span>•</span>
                  <span>Service might be temporarily unavailable</span>
                </div>
              </div>
            </div>

            {/* Status Indicator */}
            <div className="flex items-center justify-center space-x-2 mt-4 pt-4 border-t border-red-400/20">
              <div className="w-2 h-2 bg-red-400 rounded-full animate-pulse"></div>
              <span className="text-red-400 text-xs font-medium">SERVICE UNAVAILABLE</span>
            </div>
          </div>
        </div>

        {/* Floating Particles */}
        <div className="absolute -top-2 -left-2 w-4 h-4 bg-red-400/20 rounded-full animate-float"></div>
        <div className="absolute -bottom-2 -right-2 w-3 h-3 bg-orange-400/20 rounded-full animate-float" style={{animationDelay: '1.5s'}}></div>
      </div>
    </div>
  );
};

export default Error;