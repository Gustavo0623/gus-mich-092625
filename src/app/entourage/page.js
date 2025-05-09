import Link from "next/link"

export default function Entourage() {
    return (
        <div className="flex flex-wrap items-center justify-center">
            {/* Return Home Link */}
            <div className="w-full">
                <Link
                href="/"
                className=" absolute px-4 py-2 rounded" style={{color: "#6c416e"}}
                >
                    ←
                </Link>
            </div>
            <img className="h-dvh" src="/entourage.JPEG" alt="entourage list"/>
        </div>
    )
}