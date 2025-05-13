import Link from "next/link"

export default function Entourage() {
    return (
        <div className="entourage-bg flex flex-wrap items-center justify-center h-dvh overscroll-contain">
            {/* Return Home Link */}
            <div className="absolute justify-self-start self-start w-full">
                <Link
                href="/"
                className="absolute px-4 py-2 rounded" style={{color: "#6c416e"}}
                >
                    ←
                </Link>
            </div>
            <img className="w-dvw max-h-dvh lg:max-w-lg xl:max-w-1/2" src="/3rd.png" alt="entourage list"/>
        </div>
    )
}