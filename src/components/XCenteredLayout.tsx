import Particles from "./Particles";

export default function XCenteredLayout({
  children,
  herobg = false,
  particles = false,
}) {
  return (
    <div
      className={`
        relative
        ${herobg ? "bg-hero bg-cover bg-no-repeat" : ""}
        flex flex-row
        justify-center items-center
      `}
    >
      {particles && (
        <div className="absolute inset-0 z-0 pointer-events-none">
          <Particles
            particleColors={["#8d0909"]}
            particleCount={200}
            particleSpread={10}
            speed={0.1}
            particleBaseSize={100}
            moveParticlesOnHover={false}
            alphaParticles={false}
            disableRotation={false}
            pixelRatio={1}
          />
        </div>
      )}
      <div className="relative z-10 w-full">
        {children}
      </div>
    </div>
  );
}