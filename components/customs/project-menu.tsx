"use client";

import { useEffect, useState } from "react";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";

interface GitHubRepo {
  name: string;
  description: string;
  html_url: string;
}

export default function ProjectMenu() {
  const [projects, setProjects] = useState<GitHubRepo[]>([]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Define the selected projects
  const selectedProjects = ['WEBSOCKETS', 'MindSpeak', 'Spotify-using-MERN-Stack']; 

  useEffect(() => {
    async function fetchProjects() {
      try {
        const response = await fetch(
          `https://api.github.com/users/${process.env.NEXT_PUBLIC_GITHUBUSERNAME}/repos`
        );
        const data = await response.json();
        
        // Filter projects based on selectedProjects
        const filteredProjects = data.filter((project: { name: string; }) => 
          selectedProjects.includes(project.name)
        );

        setProjects(filteredProjects);
      } catch (error) {
        console.error("Error fetching projects:", error);
      }
    }

    fetchProjects();
  }, []);

  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

  return (
    <div className="relative">
      <Button
        variant="ghost"
        size="icon"
        onClick={toggleDropdown}
        aria-expanded={isDropdownOpen}
        aria-haspopup="menu"
      >
        <Menu className="h-5 w-5" />
        <span className="sr-only">Open project menu</span>
      </Button>
      {isDropdownOpen && (
        <div className="absolute right-0 mt-2 w-64 overflow-hidden  bg-black border rounded-lg z-10">
          <div className="p-4 max-h-80 overflow-auto">
            <h2 className="font-bold text-xl">More Projects</h2>
            {projects.length > 0 ? (
              projects.map((project) => (
                <a
                  key={project.name}
                  href={project.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block p-2 hover:bg-gray-600 rounded"
                >
                  <h3 className="font-semibold">{project.name}</h3>
                  <p className="text-sm text-gray-300 truncate">
                    {project.description || "No description available"}
                  </p>
                </a>
              ))
            ) : (
              <p className="text-sm text-gray-500">No projects found.</p>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
