export default function AppPreview() {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="dot-grid absolute inset-0 pointer-events-none opacity-60" />
      <div className="relative z-10 max-w-[1400px] mx-auto px-8 pb-24 md:pb-28">
        {/* Blurred app mockup */}
        <div
          className="rounded-2xl border border-craftify-border/50 overflow-hidden bg-white/5 backdrop-blur-sm"
          style={{ filter: "blur(0.5px) brightness(0.8)" }}
        >
          {/* App bar */}
          <div className="flex items-center gap-4 px-6 py-4 border-b border-gray-200/20 bg-white/90">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-full bg-blue-400 opacity-70" />
              <span className="text-gray-500 text-xs font-medium">
                Order — AutoContent Optimizer
              </span>
            </div>
            <div className="ml-auto w-4 h-4 text-gray-300">✦</div>
          </div>

          <div className="flex flex-col md:flex-row min-h-[480px]">
            {/* Left sidebar */}
            <div className="w-full md:w-1/2 border-r border-gray-200/20 p-6 bg-white/85 md:border-b-0 border-b">
              <div className="mb-5">
                <div className="text-xs text-gray-400 mb-1">Query Pattern</div>
                <div className="bg-gray-100/60 rounded px-3 py-2 text-xs text-gray-400">
                  tab-focused form layout for accessible UX research data...
                </div>
              </div>
              {[
                "Graph Design",
                "Relationships",
                "Data",
                "Components",
                "Challenging",
                "Innovative Data",
              ].map((item, i) => (
                <div
                  key={item}
                  className="flex items-center justify-between py-3 border-b border-gray-100/40"
                >
                  <span className="text-xs text-gray-500 font-medium">
                    {item}
                  </span>
                  {i === 5 ? (
                    <div className="flex gap-3 text-xs text-gray-400">
                      <span>— — — — +10</span>
                      <span>✓ 4th 1.2</span>
                    </div>
                  ) : (
                    <span className="text-gray-300 text-xs">›</span>
                  )}
                </div>
              ))}
              <div className="flex justify-between pt-4 text-xs text-gray-400">
                <span>Query format</span>
                <span>Design value</span>
              </div>
            </div>

            {/* Right panel */}
            <div className="w-full md:w-1/2 p-6 bg-white/80">
              <div className="flex gap-4 mb-4 text-xs font-medium border-b border-gray-200/50 pb-3">
                {["CloseD", "Chat", "ML test", "Items"].map((t, i) => (
                  <span
                    key={t}
                    className={
                      i === 0
                        ? "text-blue-500 border-b-2 border-blue-400 pb-1"
                        : "text-gray-400"
                    }
                  >
                    {t}
                  </span>
                ))}
              </div>
              <div className="w-2.5 h-2.5 rounded-full bg-green-400 mb-4" />
              <div className="grid grid-cols-4 gap-2 mb-4 text-xs text-gray-500 font-medium">
                {["Gieo", "to Outend", "Eccel", "Duro"].map((h) => (
                  <span key={h}>{h}</span>
                ))}
              </div>
              {/* Rows */}
              <div className="space-y-3">
                <div className="bg-gray-50/80 rounded p-3">
                  <div className="text-xs font-semibold text-gray-600 mb-2">
                    Gieo
                  </div>
                  <div className="text-xs text-gray-400 mb-1">first teno</div>
                  <div className="text-xs text-gray-500">Geo</div>
                </div>
                <div className="bg-gray-50/80 rounded p-3">
                  <div className="text-xs font-semibold text-gray-600 mb-2">
                    Consreso
                  </div>
                  <div className="text-xs text-gray-400 mb-1">Dan</div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-400">Zio nud</span>
                    <div className="bg-gray-200/60 rounded px-2 py-1 text-xs text-gray-500">
                      Gioaz aqu...
                    </div>
                  </div>
                </div>
                <button className="w-full bg-white border border-gray-300/60 rounded-lg py-2.5 text-xs font-medium text-gray-600">
                  Gioa one
                </button>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-200/30 bg-white/80 px-4 py-4 md:px-6 md:py-5">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-3 rounded-2xl bg-white/50 px-4 py-4 shadow-lg backdrop-blur-sm">
              <div className="flex flex-col gap-1 text-gray-200 text-center sm:text-left">
                <div className="flex flex-row gap-2 justify-center sm:justify-start items-center">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
                  <div className="text-xs sm:text-sm font-semibold text-white">
                    Live preview mode
                  </div>
                </div>
                <div className="text-xs sm:text-sm text-craftify-muted">
                  The Luminescent Void Editor
                </div>
              </div>
              <button className="w-full sm:w-auto bg-craftify-purple hover:bg-craftify-purpleLt text-white border border-transparent px-4 md:px-5 rounded-lg py-2 text-xs font-medium whitespace-nowrap">
                Explore Dashboard
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
