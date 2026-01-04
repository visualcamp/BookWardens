export default function AuthLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <main className="min-h-screen flex flex-col justify-center px-6 py-8">
            {children}
        </main>
    );
}
