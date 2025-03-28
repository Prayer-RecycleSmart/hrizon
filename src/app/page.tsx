export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="max-w-5xl w-full text-center">
        <h1 className="text-6xl font-bold mb-8 text-blue-600">HRizon</h1>
        <p className="text-xl mb-12">
          Enabling scaling companies to build exceptional workplace cultures while maintaining the highest standards of HR compliance.
        </p>
        <div className="flex justify-center gap-4">
          <a 
            href="/login" 
            className="px-6 py-3 rounded-md bg-blue-600 text-white font-medium hover:bg-blue-700 transition-colors"
          >
            Get Started
          </a>
          <a 
            href="#features" 
            className="px-6 py-3 rounded-md bg-gray-200 text-gray-800 font-medium hover:bg-gray-300 transition-colors"
          >
            Learn More
          </a>
        </div>
      </div>
    </main>
  );
}