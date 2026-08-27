import React from "react";
import SideNav from "./SideNav";

export default function Base({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex min-h-screen bg-gray-50 text-black">
            {/* Sidebar Navigation */}
            <SideNav />

            {/* Main Content Area */}
            <main className="flex-1 p-2 overflow-y-auto">
                <div className="flex flex-col gap-0 bg-white p-6 rounded-lg shadow-sm min-h-full">
                    {children}
                </div>
            </main>
        </div>
    );
}
