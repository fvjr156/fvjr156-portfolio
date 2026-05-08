import { useSearchParams } from "react-router-dom";

export default function ProjectsPage() {
  const [searchParams] = useSearchParams();
  const showcase_id: string = searchParams.get("showcase") || "undefined";

  return (
    <main className="min-h-screen bg-background text-text font-display flex items-center justify-center">
      <div data-aos="fade-up">
        <div
          className="w-auto px-20 h-20 border-accent/80 border-2 rounded-2xl flex flex-col items-center justify-center
      hover:border-accent hover:shadow-lg hover:shadow-accent transition duration-200 ease-in-circ"
        >
          <h2>{showcase_id}</h2>
          <p>Under Construction</p>
        </div>
      </div>
    </main>
  );
}
