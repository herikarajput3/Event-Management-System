const Loader = ({ fullScreen = false, text = "Loading…" }) => {
  return (
    <div
      className={`
        ${fullScreen ? "min-h-screen" : "py-16"}
        flex flex-col items-center justify-center
        bg-base-200
        gap-6
      `}
    >
      {/* Pulse dots */}
      <div className="flex gap-3">
        <span className="w-3 h-3 rounded-full bg-primary animate-bounce [animation-delay:-0.3s]" />
        <span className="w-3 h-3 rounded-full bg-primary animate-bounce [animation-delay:-0.15s]" />
        <span className="w-3 h-3 rounded-full bg-primary animate-bounce" />
      </div>

      {/* Context text */}
      <p className="text-sm tracking-wide text-base-content/60">
        {text}
      </p>
    </div>
  );
};

export default Loader;
