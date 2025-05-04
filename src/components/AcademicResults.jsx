const academicResults = [
    {
      year: "2024",
      course: "Advanced Level Examination",
      result: "A in Mathematics, B in Physics, C in Computer Science"
    },
    {
      year: "2025",
      course: "Bachelor of Computer Science",
      result: "Currently pursuing with a focus on Full-Stack Development"
    }
  ];
  
  export default function AcademicResults() {
    return (
      <section id="academic" className="px-6 py-20 text-white bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="mb-12 text-3xl font-bold text-center text-blue-400">Academic Results</h2>
          <div className="space-y-8">
            {academicResults.map((result, index) => (
              <div key={index} className="p-6 border shadow-md rounded-xl bg-white/10 backdrop-blur-lg border-blue-400/20">
                <h3 className="text-xl font-semibold text-gray-100">{result.year} - {result.course}</h3>
                <p className="mt-2 text-sm text-gray-300">{result.result}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  