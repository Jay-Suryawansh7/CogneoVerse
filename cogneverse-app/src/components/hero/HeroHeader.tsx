"use client";
import { useMediaQuery } from "@/hooks/use-media-query"; // Need to check if this hook exists or create it
import ThemeSwitch from "@/components/hero/ThemeSwitch";
import { cn } from "@/lib/utils";
import { AlignJustify, X, BrainCircuit, Users, Rocket, Wallet } from "lucide-react"; // Updated icons
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Drawer } from "vaul";

export function XIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <title>X</title>
      <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
    </svg>
  );
}

export default function HeroHeader() {
  const isMobile = useMediaQuery("(max-width: 992px)");
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { href: "#departments", label: "Departments", icon: BrainCircuit },
    { href: "#projects", label: "Projects", icon: Rocket },
    { href: "#community", label: "Community", icon: Users },
  ];

  return (
    <header className="w-full top-0 z-50 fixed lg:absolute lg:flex lg:items-center lg:px-8 lg:py-4 text-primary-foreground backdrop-blur-sm lg:backdrop-blur-none">
      <div className="flex md:max-w-[1400px] mx-auto w-full items-center relative justify-between h-16 px-4 bg-white/80 border-b lg:border border-[var(--color-ink)]/10 dark:border-[var(--color-paper)]/10 rounded-b-none lg:rounded-b-2xl lg:rounded-t-2xl dark:bg-[var(--color-onyx)]/90 backdrop-blur-md shadow-sm">
        {/* Mobile Menu */}
        {isMobile && (
          <Drawer.Root direction="left" open={isOpen} onOpenChange={setIsOpen}>
            <Drawer.Trigger className="px-3 text-white h-10 grid place-content-center bg-[var(--color-cobalt)] hover:bg-[var(--color-oceanic)] transition-colors w-10 rounded-lg">
              <AlignJustify className="w-5 h-5" />
            </Drawer.Trigger>
            <Drawer.Portal>
              <Drawer.Overlay className="fixed inset-0 bg-black/40 z-50" />
              <Drawer.Content
                className="left-2 top-2 bottom-2 fixed z-50 outline-hidden w-72 flex"
                style={{ "--initial-transform": "calc(100% + 8px)" } as React.CSSProperties}
              >
                <div className="dark:bg-[var(--color-onyx)] bg-[#F9F6EF] border border-[var(--color-ink)]/10 dark:border-[var(--color-paper)]/10 p-4 h-full w-full grow flex flex-col rounded-[16px] shadow-2xl">
                  <div className="w-full flex justify-between mb-6">
                    <Link href="/" className="flex items-center gap-2">
                       <span className="text-xl font-bold text-[var(--color-oceanic)] dark:text-[var(--color-paper)]" style={{ fontFamily: "var(--font-display)" }}>
                        Cogneverse
                      </span>
                    </Link>
                    <button
                      className="rounded-md w-8 h-8 flex items-center justify-center bg-[var(--color-ink)]/5 hover:bg-[var(--color-ink)]/10 dark:text-white transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                  <div className="space-y-2">
                  {navItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className={cn(
                        "cursor-pointer gap-3 select-none p-3 rounded-lg transition-colors duration-200 flex items-center justify-start text-[var(--color-ink)] dark:text-[var(--color-paper)] hover:bg-[var(--color-ink)]/5 dark:hover:bg-[var(--color-paper)]/10",
                        pathname === item.href && "bg-[var(--color-nectarine)]/10 text-[var(--color-oceanic)]"
                      )}
                    >
                      <item.icon size={20} />
                      <span className="font-medium">{item.label}</span>
                    </Link>
                  ))}
                  </div>
                </div>
              </Drawer.Content>
            </Drawer.Portal>
          </Drawer.Root>
        )}

        {/* Desktop Title */}
        <Link href="/" className="flex items-center pl-2 group">
           <span className="text-xl font-bold text-[var(--color-oceanic)] dark:text-[var(--color-paper)] tracking-tight group-hover:opacity-80 transition-opacity" style={{ fontFamily: "var(--font-display)" }}>
            Cogneverse
          </span>
          <span className="ml-3 hidden sm:inline-flex items-center px-2 py-0.5 rounded textxs font-medium bg-[var(--color-nectarine)]/10 text-[var(--color-oceanic)] border border-[var(--color-nectarine)]/20">
            BETA
          </span>
        </Link>
        
        {/* Desktop Nav */}
        {!isMobile && (
          <nav className="hidden lg:flex gap-1 items-center font-medium absolute left-1/2 -translate-x-1/2">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "cursor-pointer gap-2 select-none px-4 py-2 rounded-full transition-all duration-200 flex items-center justify-center text-[var(--color-ink)]/70 dark:text-[var(--color-paper)]/70 hover:text-[var(--color-oceanic)] dark:hover:text-[var(--color-paper)] hover:bg-[var(--color-ink)]/5 dark:hover:bg-[var(--color-paper)]/5",
                  )}
                >
                  <item.icon size={16} />
                  <span>{item.label}</span>
                </Link>
              ))}
            </nav>
        )}

        {/* Right Actions */}
        <nav className="flex items-center gap-2 sm:gap-3">
          <ThemeSwitch />
          
          <a
            href="https://github.com" // Placeholder
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex w-10 h-10 border border-[var(--color-ink)]/10 dark:border-[var(--color-paper)]/10 rounded-md items-center justify-center hover:bg-[var(--color-ink)]/5 dark:hover:bg-[var(--color-paper)]/10 transition-colors"
          >
             <svg viewBox="0 0 24 24" className="w-5 h-5 fill-[var(--color-ink)] dark:fill-[var(--color-paper)]">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
             </svg>
          </a>

          <a
            href="/login"
            className="bg-[var(--color-cobalt)] hover:bg-[var(--color-oceanic)] text-white h-10 flex items-center justify-center px-5 rounded-md text-sm font-medium transition-colors shadow-lg hover:shadow-xl"
          >
            Join Ecosystem
          </a>
        </nav>
      </div>
    </header>
  );
}
