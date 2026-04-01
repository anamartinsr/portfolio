function IconBubble({
  positionClass,
  outerSizeClass,
  innerSizeClass,
  innerStyle,
  children,
}) {
  return (
    <div className={positionClass}>
      <div
        className={`flex ${outerSizeClass} items-center justify-center rounded-full bg-surface/80 backdrop-blur-md shadow-[0px_12px_28px_rgba(28,28,23,0.18)]`}
      >
        <div
          className={`flex ${innerSizeClass} items-center justify-center rounded-full`}
          style={innerStyle}
        >
          {children}
        </div>
      </div>
    </div>
  );
}

export default function CreatorFloatingIcons() {
  return (
    <>
      <IconBubble
        positionClass="absolute -right-20 -top-8 z-20"
        outerSizeClass="h-20 w-20 md:h-24 md:w-24"
        innerSizeClass="h-12 w-12 md:h-14 md:w-14"
        innerStyle={{ backgroundColor: "#1877F2" }}
      >
        <svg
          className="h-7 w-7 text-white"
          viewBox="0 0 24 24"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987H7.898V12h2.54V9.797c0-2.506 1.493-3.89 3.777-3.89 1.095 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.891h-2.33v6.987C18.343 21.128 22 16.991 22 12z" />
        </svg>
      </IconBubble>

      <IconBubble
        positionClass="absolute -right-2 top-16 z-20"
        outerSizeClass="h-14 w-14 md:h-16 md:w-16"
        innerSizeClass="h-9 w-9 md:h-10 md:w-10"
        innerStyle={{ backgroundColor: "#FF0000" }}
      >
        <svg
          className="h-6 w-6 text-white"
          viewBox="0 0 24 24"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 0 0 .5 6.2C0 8.1 0 12 0 12s0 3.9.5 5.8a3 3 0 0 0 2.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 0 0 2.1-2.1c.5-1.9.5-5.8.5-5.8s0-3.9-.5-5.8zM9.6 15.6V8.4l6.3 3.6-6.3 3.6z" />
        </svg>
      </IconBubble>

      <IconBubble
        positionClass="absolute -left-6 bottom-16 z-20"
        outerSizeClass="h-14 w-14 md:h-16 md:w-16"
        innerSizeClass="h-9 w-9 md:h-10 md:w-10"
        innerStyle={{ backgroundColor: "#1DB954" }}
      >
        <svg
          className="h-6 w-6 text-white"
          viewBox="0 0 24 24"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.502 17.34a.75.75 0 0 1-1.03.245c-2.82-1.723-6.37-2.114-10.55-1.165a.75.75 0 1 1-.333-1.463c4.575-1.04 8.513-.594 11.665 1.33a.75.75 0 0 1 .248 1.053zm1.47-3.267a.938.938 0 0 1-1.288.306c-3.23-1.985-8.152-2.56-11.97-1.4a.938.938 0 0 1-.544-1.795c4.362-1.323 9.79-.68 13.494 1.595a.938.938 0 0 1 .308 1.294zm.126-3.4C15.164 8.337 8.666 8.12 4.91 9.258a1.125 1.125 0 0 1-.653-2.153c4.31-1.307 11.478-1.054 15.995 1.628a1.125 1.125 0 1 1-1.154 1.94z" />
        </svg>
      </IconBubble>

      <IconBubble
        positionClass="absolute -right-12 bottom-2 z-20"
        outerSizeClass="h-20 w-20 md:h-24 md:w-24"
        innerSizeClass="h-12 w-12 md:h-14 md:w-14"
        innerStyle={{
          background:
            "radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%)",
        }}
      >
        <svg
          className="h-7 w-7 text-white"
          viewBox="0 0 24 24"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M7.8 2h8.4A5.8 5.8 0 0 1 22 7.8v8.4A5.8 5.8 0 0 1 16.2 22H7.8A5.8 5.8 0 0 1 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2zm0 1.8A4 4 0 0 0 3.8 7.8v8.4a4 4 0 0 0 4 4h8.4a4 4 0 0 0 4-4V7.8a4 4 0 0 0-4-4H7.8zm4.2 2.7A5.5 5.5 0 1 1 6.5 12 5.5 5.5 0 0 1 12 6.5zm0 1.8A3.7 3.7 0 1 0 15.7 12 3.7 3.7 0 0 0 12 8.3zm6.1-2.1a1.3 1.3 0 1 1-1.3 1.3 1.3 1.3 0 0 1 1.3-1.3z" />
        </svg>
      </IconBubble>
    </>
  );
}
