import { cn } from "@/lib/utils";
import { AppProviders } from "@/providers/app-providers";
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/navbar";
import { Separator } from "@/components/ui/separator";

const geistSans = localFont({
    src: "./fonts/GeistVF.woff",
    variable: "--font-geist-sans",
    weight: "100 900",
});
const geistMono = localFont({
    src: "./fonts/GeistMonoVF.woff",
    variable: "--font-geist-mono",
    weight: "100 900",
});

export const metadata: Metadata = {
    title: "Supra Swap",
    description: "Supra swap",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={cn(`${geistSans.variable} ${geistMono.variable} antialiased`, 'bg-muted flex flex-col gap-y-4')}
            >
                <AppProviders>
                <Navbar />
                <Separator />
                    {children}
                </AppProviders>
            </body>
        </html>
    );
}
