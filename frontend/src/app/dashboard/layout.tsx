// frontend/src/app/dashboard/layout.tsx
"use client";

import { ReactNode } from "react";
import { useAuth } from "../../context/AuthContext";
import { useRouter, usePathname } from "next/navigation";
import Sidebar from "../../components/Sidebar";
import { useEffect } from "react";

export default function DashboardLayout({
  children,
}: {
  children: ReactNode;
}) {
  const { logout, isAuthenticated, loading } = useAuth();
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    if (!loading && !isAuthenticated) {
      router.push("/login");
    }
  }, [isAuthenticated, loading, router]);

  if (loading) {
    return (
      <div className="min-h-screen bg-[color:var(--bg-primary)] text-[color:var(--text-primary)] flex items-center justify-center">
        <div className="text-2xl font-bold text-[color:var(--neon-cyan)] animate-pulse">Loading...</div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return null; // The redirect happens in the effect above
  }

  return (
    <div className="min-h-screen bg-[color:var(--bg-primary)] text-[color:var(--text-primary)] overflow-x-hidden relative">
      {/* Animated Blob Background */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="blob-c">
          <div className="blob"></div>
          <div className="blob"></div>
          <div className="blob"></div>
        </div>
      </div>

      <div className="flex">
        {/* Sidebar - Only render on larger screens, mobile menu is handled by the component itself */}
        <Sidebar onLogout={logout} />

        {/* Main Content */}
        <main className="flex-1 p-4 md:p-6">
          <div className="max-w-6xl mx-auto">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}