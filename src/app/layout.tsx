import "./globals.css";

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
        <body>
        {/* This is where your pages (like the "Hello" page) will be injected */}
        {children}
        </body>
        </html>
    );
}