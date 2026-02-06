"use client";

const item = {
  href: "/products",
  title: "Orion 1.0",
};

export default function NewItemsLoading() {
  return (
    <a
      href={item.href}
      className="inline-flex justify-center w-fit mx-auto items-center gap-1 rounded-full bg-[var(--color-cobalt)] border dark:border-[var(--color-paper)]/20 border-[var(--color-ink)]/10 shadow-sm py-1 pl-1 pr-3 text-xs mb-6 hover:scale-105 transition-transform"
    >
      <div className="rounded-full bg-white px-2 py-1 text-xs font-bold text-[var(--color-cobalt)]">
        New Lead
      </div>
      <p className="text-white sm:text-base text-xs inline-block ml-2">
        Introducing <span className="font-semibold">{item.title}</span>
      </p>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden="true"
        className="h-3 w-3 text-white ml-1"
      >
        <path
          fillRule="evenodd"
          d="M12.97 3.97a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 1 1-1.06-1.06l6.22-6.22H3a.75.75 0 0 1 0-1.5h16.19l-6.22-6.22a.75.75 0 0 1 0-1.06Z"
          clipRule="evenodd"
        ></path>
      </svg>
    </a>
  );
}
