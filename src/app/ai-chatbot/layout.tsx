import type { Metadata } from "next";

import { Poppins } from "next/font/google";

export const metadata: Metadata = {
  title: "AI CHAT",
  description: "Chat with AI Therapy Bot",
};
const poppins_init = Poppins({
  subsets: ["latin"],
  weight: ["100", "300", "700"],
  variable: "--font-poppins",
});
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins_init.className}  bg-[#F5F5F5]`}>
        {children}
      </body>
    </html>
  );
}
