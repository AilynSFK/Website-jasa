// footer is a simple presentational component and doesn't need router imports
export default function Footer() {
  return (
    <footer className="bg-gray-100 text-center py-6 w-full mx-0 mt-0">
      <p className="text-sm text-gray-600">
        © 2025 My Website. All rights reserved.
      </p>
      <p className="text-sm text-gray-500 mt-2">
        Privacy Policy: Website ini menjaga privasi data pengguna.
      </p>
    </footer>
  );
}