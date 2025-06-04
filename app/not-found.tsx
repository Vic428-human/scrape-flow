import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="text-center">
        <h2 className="text-6xl font-extrabold text-primary">404</h2>
        <p className="text-2xl font-bold text-primary">當前頁面不存在</p>
        <Link href="/" className="text-muted-foreground">
          點我回首頁
        </Link>
      </div>
    </div>
  );
}
