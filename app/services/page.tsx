export default function ServicesPage() {
  return (
    <main className="min-h-screen p-10">
      <h1 className="text-5xl font-bold">
        Our Services
      </h1>

      <div className="grid md:grid-cols-3 gap-6 mt-10">
        <div className="border p-6 rounded-xl">
          <h2 className="text-2xl font-bold">
            Website Development
          </h2>
          <p>Business and E-Commerce Websites.</p>
        </div>

        <div className="border p-6 rounded-xl">
          <h2 className="text-2xl font-bold">
            BPO Services
          </h2>
          <p>Chat, Email and Voice Support.</p>
        </div>

        <div className="border p-6 rounded-xl">
          <h2 className="text-2xl font-bold">
            IT Consulting
          </h2>
          <p>Cloud, Security and Digital Transformation.</p>
        </div>
      </div>
    </main>
  );
}