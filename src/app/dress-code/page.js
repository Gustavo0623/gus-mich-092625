import Link from "next/link"

export default function DressCode() {
    return (
        <div className="flex flex-wrap items-center justify-center p-6 gap-6">
            {/* Return Home Link */}
            <div className="w-full">
                <Link
                href="/"
                className="text-white bg-opacity-50 px-4 py-2 rounded hover:bg-opacity-75 transition" style={{backgroundColor: "#6c416e"}}
                >
                    ←
                </Link>
            </div>
            <img className="max-h-screen" src="/attire.JPG" alt="attire guidelines"/>
        </div>
    )
}