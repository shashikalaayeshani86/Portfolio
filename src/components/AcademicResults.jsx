const academicResults = [
    {
      year: "2025 (Expected)",
      course: "Bachelor’s Degree Completion",
      result: "Awaiting final results and degree certificate"
    },
    {
      year: "2021 - Present",
      course: "Bachelor of Computer Science - University of Ruhuna",
      result: "Currently pursuing with a GPA of 3.76, focused on Full-Stack Development"
    },
    {
      year: "2020",
      course: "G.C.E. Advanced Level Examination",
      result: "Z-Score: 1.4356 | A in Mathematics, B in Physics, C in ICT"
    },
    {
      year: "2017",
      course: "G.C.E. Ordinary Level Examination",
      result: "Passed all subjects with distinction in Mathematics and Science"
    },
    {
      year: "Documents",
      course: "Available Academic Records",
      result: "Result Sheets and Transcripts available on request"
    }
  ];
  
  export default function AcademicResults() {
    return (
      <section id="academic" className="px-6 py-20 text-white bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="mb-12 text-3xl font-bold text-center text-blue-400">Academic Results</h2>
          <div className="space-y-8">
            {academicResults.map((result, index) => (
              <div
                key={index}
                className="p-6 border shadow-md rounded-xl bg-white/10 backdrop-blur-lg border-blue-400/20"
              >
                <h3 className="text-xl font-semibold text-gray-100">
                  {result.year} - {result.course}
                </h3>
                <p className="mt-2 text-sm text-gray-300">{result.result}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  