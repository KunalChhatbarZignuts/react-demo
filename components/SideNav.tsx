"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
    { name: "Product Creation", href: "/products/create" },
    { name: "Category Management", href: "/categories" },
    { name: "Custom Product Badges", href: "/badges" },
    { name: "Tax & Additional Charges", href: "/taxes" },
    { name: "Inventory/Stock Management", href: "/inventory" },
    { name: "Shipping Rules", href: "/shipping" },
    { name: "Digital Product Selling", href: "/digital-products" },
    { name: "Customizable Checkout Fields", href: "/checkout-fields" },
    { name: "Product Variants & Attributes", href: "/attributes" },
];

export default function SideNav() {
    const pathname = usePathname();

    return (
        // flex flex-col gap-0 bg-white p-6 rounded-lg shadow-sm min-h-full">
        <div className="flex p-2">
            <nav
                className="w-64 
        shadow-sm min-h-full bg-white rounded-lg gap-0
        h-screen p-4 overflow-y-auto border-d border-gray-200 shrink-0"
            >
                <ul className="space-y-2">
                    {navItems.map((item) => {
                        const isActive = pathname === item.href;
                        return (
                            <li key={item.name}>
                                <Link
                                    href={item.href}
                                    className={`
                                  block w-full px-4 py-2 rounded-[10px]
                                    hover:bg-blue-500 transition-colors  ${
                                        isActive
                                            ? "bg-blue-600 text-white font-medium"
                                            : "text-gray-600 hover:bg-gray-200 hover:text-gray-900"
                                    }`}
                                >
                                    {item.name}
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            </nav>
        </div>
    );
}
