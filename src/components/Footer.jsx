export default function Footer() {
  const tahun = new Date().getFullYear();

  return (
    <footer className="mt-auto border-t border-border bg-card py-4 text-center text-sm text-muted-foreground">
      <p>&copy; {tahun} Muhammad Ulil Azmi</p>
    </footer>
  );
}
