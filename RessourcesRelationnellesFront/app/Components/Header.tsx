import React from 'react';
import { Link } from 'react-router';

//Header component, containing the gradient of green and orange and the title of the project inside.
export function Header() {
  return (
    <header className="bg-gradient-to-r from-green-600 to-yellow-500 p-4"> {/* Tailwind argument that makes a gradient to the right, starting from green, going to yellow, with a padding of 1rem (base unit in tailwind) */}
      <div className="container"> {/* Tailwind argument that makes the div responsive */}
        <Link
          to="/"
          className="flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-colors"
          >
          <h1 className="text-white text-2xl font-bold">Project R</h1> {/* Argument that makes the text white, bigger than usual, and bold */}
        </Link>
      </div>
    </header>
  );
}