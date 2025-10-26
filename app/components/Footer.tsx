export function Footer() {
  return (
    <footer className="mt-16 mb-6 mx-4 md:mx-8 rounded-2xl py-6 bg-gray-100/80 dark:bg-gray-900/60 backdrop-blur-md border border-white/20 dark:border-gray-800/40 text-center text-gray-600 dark:text-gray-400 text-sm shadow-sm transition-all duration-300">
      <p>
        &copy; {new Date().getFullYear()}{" "}
        <span className="font-semibold text-gray-800 dark:text-gray-200">
          Karryl Dumalag
        </span>
        . All rights reserved.
      </p>
    </footer>
  );
}
