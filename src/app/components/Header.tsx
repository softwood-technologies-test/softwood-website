import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Header = () => {
    const navLinks = [
        { href: '/', label: 'HOME' },
        { href: '/why-us', label: 'WHY US' },
        { href: '/sourcing', label: 'SOURCING' },
        { href: '/production', label: 'PRODUCTION' },
        { href: '/sustainability', label: 'SUSTAINABILITY' },
        { href: '/careers', label: 'CAREERS' },
        { href: '/contact', label: 'CONTACT' },
        { href: '/blog', label: 'BLOG' },
    ];

    return (
        <header className="w-full bg-base-100 shadow-md">
            <div className="navbar container mx-auto">
                <div className="flex-1">
                <Link href="/" className="flex items-center">
                    <Image src="/logo.svg" alt="Logo" width={60} height={45} className="mr-2" />
                    <span className="font-bold text-lg italic">Softwood Textiles</span>
                </Link>
                </div>
                <div className="flex-none">
                <ul className="menu menu-horizontal p-0">
                    {navLinks.map((link) => (
                    <li key={link.href}>
                        <Link href={link.href}>{link.label}</Link>
                    </li>
                    ))}
                </ul>
                </div>
            </div>
        </header>
    );
};

export default Header;