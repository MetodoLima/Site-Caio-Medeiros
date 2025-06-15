
const AnimatedBackground = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Gradient base */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-secondary/20"></div>
      
      {/* Floating lights */}
      <div className="absolute inset-0">
        {/* Large primary light */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
        
        {/* Medium accent lights */}
        <div className="absolute top-1/3 right-1/3 w-64 h-64 bg-primary/15 rounded-full blur-2xl animate-[pulse_3s_ease-in-out_infinite]"></div>
        <div className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-[pulse_4s_ease-in-out_infinite]"></div>
        
        {/* Small floating lights */}
        <div className="absolute top-1/2 right-1/4 w-32 h-32 bg-primary/25 rounded-full blur-xl animate-[float_6s_ease-in-out_infinite]"></div>
        <div className="absolute bottom-1/3 right-1/2 w-24 h-24 bg-primary/20 rounded-full blur-lg animate-[float_8s_ease-in-out_infinite_reverse]"></div>
        <div className="absolute top-3/4 left-1/2 w-40 h-40 bg-primary/15 rounded-full blur-2xl animate-[float_7s_ease-in-out_infinite]"></div>
        
        {/* Subtle accent lights */}
        <div className="absolute top-1/6 right-1/6 w-20 h-20 bg-primary/30 rounded-full blur-md animate-[twinkle_5s_ease-in-out_infinite]"></div>
        <div className="absolute bottom-1/6 left-1/6 w-16 h-16 bg-primary/25 rounded-full blur-sm animate-[twinkle_7s_ease-in-out_infinite]"></div>
      </div>
      
      {/* Subtle grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(132,255,108,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(132,255,108,0.03)_1px,transparent_1px)] bg-[size:100px_100px]"></div>
      
      {/* Radial gradient overlay */}
      <div className="absolute inset-0 bg-radial-gradient from-transparent via-transparent to-background/50"></div>
    </div>
  );
};

export default AnimatedBackground;
