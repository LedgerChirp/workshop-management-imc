"use client";
import React, { useState, useEffect } from "react";

const ReportsPage: React.FC = () => {
  const [reports, setReports] = useState<string[]>([]);
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState<string[]>([]);

  // Simulated report generation
  const generateReport = (prompt: string) => {
    const newReport = `Report based on: "${prompt}"`;
    setReports([...reports, newReport]);
    setQuery("");
  };

  // Simulated suggestions based on query
  useEffect(() => {
    if (query.length > 0) {
      setSuggestions([
        `${query} sales report`,
        `${query} performance analysis`,
        `${query} market trends`,
      ]);
    } else {
      setSuggestions([]);
    }
  }, [query]);

  return (
    <div className="max-w-6xl mx-auto h-full p-6">
      <h1 className="text-2xl font-semibold mb-6">Reports</h1>

      <div className="bg-gray-100 rounded-lg p-4 mb-6 h-[calc(100vh-250px)] overflow-y-auto">
        {reports.map((report, index) => (
          <div key={index} className="bg-white rounded-lg p-4 mb-4 shadow">
            <p>{report}</p>
          </div>
        ))}
      </div>

      <div className="relative">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Enter your report query..."
          className="w-full p-3 pr-20 border rounded-md"
        />
        <button
          onClick={() => generateReport(query)}
          className="absolute right-2 top-2 bg-blue-500 text-white px-4 py-1 rounded-md"
        >
          Generate
        </button>

        {suggestions.length > 0 && (
          <div className="absolute bottom-full left-0 w-full bg-white border rounded-md shadow-lg mb-1">
            {suggestions.map((suggestion, index) => (
              <div
                key={index}
                className="p-2 hover:bg-gray-100 cursor-pointer"
                onClick={() => setQuery(suggestion)}
              >
                {suggestion}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ReportsPage;
