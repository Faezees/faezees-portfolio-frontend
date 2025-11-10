"use client";

import { useState } from "react";

interface Props {
  longDescription: string;
  technologies: string[];
}

export default function ProjectTabs({ longDescription, technologies }: Props) {
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <div>
      {/* Tabs */}
      <div className="mb-8 border-b border-gray-200 dark:border-gray-700">
        <div className="flex gap-8">
          {[
            { id: "overview", label: "Overview" },
            { id: "technologies", label: "Technologies" },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`relative pb-4 font-semibold transition-colors ${
                activeTab === tab.id
                  ? "text-blue-600 dark:text-blue-400"
                  : "text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
              }`}
            >
              {tab.label}
              {activeTab === tab.id && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600" />
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Tab Content */}
      {activeTab === "overview" && (
        <div className="rounded-3xl border border-gray-200 bg-white p-8 shadow-lg dark:border-gray-700 dark:bg-gray-800 md:p-12">
          <h2 className="mb-6 text-3xl font-bold text-gray-900 dark:text-white">
            Project Overview
          </h2>
          <div
            className="prose prose-lg dark:prose-invert max-w-none leading-loose text-gray-700 dark:text-gray-300"
            dangerouslySetInnerHTML={{ __html: longDescription }}
          />
        </div>
      )}

      {activeTab === "technologies" && (
        <div className="rounded-3xl border border-gray-200 bg-white p-8 shadow-lg dark:border-gray-700 dark:bg-gray-800 md:p-12">
          <h2 className="mb-6 text-3xl font-bold text-gray-900 dark:text-white">
            Technologies Used
          </h2>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4">
            {technologies.map((tech) => (
              <div
                key={tech}
                className="group flex items-center gap-3 rounded-xl border border-gray-200 bg-gray-50 p-4 transition-all hover:border-blue-500 hover:shadow-md dark:border-gray-700 dark:bg-gray-900"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-blue-500 to-purple-500 text-lg font-bold text-white">
                  {tech.charAt(0)}
                </div>
                <span className="font-semibold text-gray-900 dark:text-white">
                  {tech}
                </span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
