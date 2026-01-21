import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function EditorPage() {
    return (
        <div className="flex min-h-screen w-full items-center justify-center bg-white font-sans dark:bg-black">
            <main className="flex flex-col items-center justify-center w-full h-full px-4 py-8">
                <div className="flex flex-col items-center gap-6 text-center">
                    <h1 className="max-w-md text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
                        Editor page is cooking!!! <br />
                        it's coming soon.
                    </h1>

                    <Button asChild size="lg" className="rounded-full">
                        <Link href="/" className="flex items-center gap-2">
                            <ArrowLeft className="h-4 w-4" />
                            Go Back to Home
                        </Link>
                    </Button>
                </div>
            </main>
        </div>
    )
}
