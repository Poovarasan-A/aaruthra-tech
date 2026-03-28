// "use client";

// import { useState } from "react";

// export default function Hero() {
//   const [loaded, setLoaded] = useState(false);
//   return (
//     <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-6 pt-20">
//       {/* Dot grid */}
//       <div className="absolute inset-0 -z-10 top-[7rem] overflow-hidden">
//         <video
//           autoPlay
//           muted
//           playsInline
//           onLoadedData={() => setLoaded(true)}
//           className={`w-full h-[90%] object-cover transition-opacity duration-1000 ${
//             loaded ? "opacity-100" : "opacity-0"
//           }`}
//         >
//           <source src="/techv.mp4" type="video/mp4" />
//         </video>

//         {/* Optional overlay for better contrast */}
//         <div className="absolute inset-0 bg-[#0d0b1e]/70"></div>
//       </div>
//       <div className="dot-grid absolute inset-0 pointer-events-none" />
//       {/* Top purple glow */}
//       <div className="hero-glow absolute inset-0 pointer-events-none" />

//       <div className="relative z-10 flex flex-col items-center text-center max-w-5xl mx-auto">
//         {/* Badge */}

//         <div className="mb-8 flex items-center gap-2 px-5 py-2 rounded-full border border-craftify-border bg-craftify-surface/60 backdrop-blur-sm">
//           <span className="text-craftify-star text-sm">✦</span>
//           <span className="text-sm text-craftify-muted font-medium">
//             More than a website builder
//           </span>
//         </div>

//         {/* Headline */}
//         <h1 className="text-6xl sm:text-7xl lg:text-[88px] font-black text-white leading-[1.05] tracking-tight mb-6">
//           Your site should do more
//           <br />
//           than look good
//         </h1>

//         {/* Sub */}
//         <p className="text-lg text-craftify-muted max-w-xl leading-relaxed mb-10">
//           Craftify unites marketers, designers, and developers to create,
//           manage, and optimize impactful web experiences
//         </p>

//         {/* Buttons */}
//         <div className="flex flex-wrap items-center justify-center gap-4">
//           <a
//             href="#"
//             className="bg-craftify-purple hover:bg-craftify-purpleLt text-white font-bold px-10 py-4 rounded-2xl transition-colors text-sm shadow-lg shadow-craftify-purple/30"
//           >
//             Start Building Now
//           </a>
//           <a
//             href="#"
//             className="bg-white/10 hover:bg-white/15 text-white font-bold px-10 py-4 rounded-2xl border border-white/10 transition-colors text-sm backdrop-blur-sm"
//           >
//             Watch video
//           </a>
//         </div>
//       </div>

//       {/* Bottom fade */}
//       <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-craftify-bg to-transparent pointer-events-none" />
//     </section>
//   );
// }

"use client";

import { useState, useEffect } from "react";

export default function Hero() {
  const [loaded, setLoaded] = useState(false);
  const [ended, setEnded] = useState(false);

  // Fallback in case video event doesn't fire
  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-6 pt-20">
      {/* 🎥 Background Video */}
      <div
        className={`absolute  inset-0 -z-10 top-[7rem]  overflow-hidden ${
          loaded && !ended ? "opacity-100" : "opacity-0"
        }`}
      >
        <video
          autoPlay
          muted
          playsInline
          preload="auto"
          onCanPlay={() => setLoaded(true)}
          onEnded={() => setEnded(true)}
          className={`w-full h-[98%] object-cover  transition-opacity duration-1000 ${
            loaded && !ended ? "opacity-50" : "opacity-0"
          }`}
        >
          <source src="/techv.mp4" type="video/mp4" />
        </video>

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-[#0d0b1e]/70"></div>
      </div>

      {/* Dot grid */}
      <div className="dot-grid absolute inset-0 pointer-events-none" />

      {/* Top glow */}
      <div className="hero-glow absolute inset-0 pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center max-w-5xl mx-auto">
        {/* Badge */}
        <div className="mb-8 flex items-center gap-2 px-5 py-2 rounded-full border border-craftify-border bg-craftify-surface/60 backdrop-blur-sm">
          <span className="text-craftify-star text-sm">✦</span>
          <span className="text-sm text-craftify-muted font-medium">
            More than a website builder
          </span>
        </div>

        {/* Heading */}
        <h1 className="text-6xl sm:text-7xl lg:text-[88px] font-black text-white leading-[1.05] tracking-tight mb-6">
          Your site should do more
          <br />
          than look good
        </h1>

        {/* Subtext */}
        <p className="text-lg text-craftify-muted max-w-xl leading-relaxed mb-10">
          Craftify unites marketers, designers, and developers to create,
          manage, and optimize impactful web experiences
        </p>

        {/* Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4">
          <a
            href="#"
            className="bg-craftify-purple hover:bg-craftify-purpleLt text-white font-bold px-10 py-4 rounded-2xl transition-colors text-sm shadow-lg shadow-craftify-purple/30"
          >
            Start Building Now
          </a>
          <a
            href="#"
            className="bg-white/10 hover:bg-white/15 text-white font-bold px-10 py-4 rounded-2xl border border-white/10 transition-colors text-sm backdrop-blur-sm"
          >
            Watch video
          </a>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-craftify-bg to-transparent pointer-events-none" />
    </section>
  );
}
