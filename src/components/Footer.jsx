export default function Footer() {
  const tahun = new Date().getFullYear();

  return (
    <footer className="mt-auto border-t border-gray-200 bg-white py-4 text-center text-sm text-gray-600">
      <p>&copy; {tahun} Muhammad Ulil Azmi</p>
    </footer>
  );
}
