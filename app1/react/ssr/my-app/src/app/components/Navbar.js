import React from 'react';
import Link from 'next/link';
import '../App.css';

function Navbar() {
  return (
    <nav>
        <ul>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/ImagePage">ImagePage</Link></li>
        </ul>
    </nav>
  );
}

export const dynamic = 'force-dynamic'; // Ensure dynamic behavior
export default Navbar;
