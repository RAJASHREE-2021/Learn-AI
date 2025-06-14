import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { dark } from "@clerk/themes";
import "./globals.css";
import Header from "@/components/header";
import { ClerkProvider } from "@clerk/nextjs";

const inter=Inter({subsets:["latin"] });

export const metadata = {
  title: "Learn - AI Carrer Coach",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider
    appearance={{
      baseTheme: dark,
    }}
  >
     
   

    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.className}`}
      >
        <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >

            {/*header*/}
           <Header/>
            <main className="min-h-screen">
            {children}
            </main>
         
          </ThemeProvider>
  {/*footer*/}
  <footer className="bg-muted/50 py-12">
  <div className="container mx-auto px-4 text-center text-gray-200">
  <p>Made for final year project</p>
     </div>
  </footer>
      </body>
    </html>
    </ClerkProvider>
  );
}
