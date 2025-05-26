import React from 'react';

export default function Footer() {
    return (
        <footer className="mt-12 border-t border-gray-200 py-6 text-center text-sm text-gray-500">
            <p>
                © {new Date().getFullYear()} Johana Sevillano — Hecho con Next.js, React, TailwindCSS y ☕
            </p>
        </footer>
    );
}
