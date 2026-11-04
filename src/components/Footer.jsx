export default function Footer() {
  const tahun = new Date().getFullYear();

  return (
    <footer className="mt-auto border-t border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 py-4 text-center text-sm text-gray-600 dark:text-gray-400">
      <p>&copy; {tahun} Muhammad Ulil Azmi</p>
    </footer>
  );
}
