import Link from "next/link"

export default function Rsvp() {
    return (
        <div className="rsvp-bg flex flex-wrap items-center justify-center h-dvh max-h-dvh overscroll-contain">
            {/* Return Home Link */}
            <div className="absolute justify-self-start self-start w-full">
                <Link
                href="/"
                className="absolute px-4 py-2 rounded text-2xl" style={{color: "#6c416e"}}
                >
                    ←
                </Link>
            </div>
            <img className="w-dvw max-h-dvh lg:max-w-lg xl:max-w-1/2" src="/4th.png" alt="rsvp details"/>
            <Link
            href="https://na01.safelinks.protection.outlook.com/?url=https%3A%2F%2Fwww.icloud.com%2Finvites%2F0195Y76b6J7Zmmvd5jXJdSV-A&data=05%7C02%7C%7Cc5a351b6e8c8445a5c6e08dd8bec9462%7C84df9e7fe9f640afb435aaaaaaaaaaaa%7C1%7C0%7C638820570415375379%7CUnknown%7CTWFpbGZsb3d8eyJFbXB0eU1hcGkiOnRydWUsIlYiOiIwLjAuMDAwMCIsIlAiOiJXaW4zMiIsIkFOIjoiTWFpbCIsIldUIjoyfQ%3D%3D%7C0%7C%7C%7C&sdata=z9P3VfesWMvOuWN0KS9%2FrjpYwK8H%2BUcMoFZmtbiRU2k%3D&reserved=0"
            className="absolute bottom-8 self-end text-center px-6 py-3 bg-[#6c416e] text-white font-semibold rounded-lg hover:bg-[#5a365e] transition" 
            >
                RSVP Now!
            </Link>
        </div>
    )
}