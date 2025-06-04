import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="text-center">
        <h2 className="text-6xl font-extrabold text-primary">404</h2>
        <p className="text-2xl font-bold text-primary mb-8 max-w-md">
          當前頁面不存在
        </p>

        <div className="flex flex-col justify-center sm:flex-row gap-4">
          <Link
            href="/"
            className="flex items-center justify-center bg-primary text-white px-4 py-2 rounded-md hover:bg-primary/20 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            回首頁
          </Link>
        </div>
      </div>
    </div>
  );
}
