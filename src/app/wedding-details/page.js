import Link from "next/link"

export default function Details() {
    return (
        <div className="details-bg flex flex-wrap items-center justify-center p-6 gap-6 min-h-dvh">
            <div className="absolute justify-self-start self-start w-full">
                <Link
                href="/"
                className="absolute px-4 py-2 rounded" style={{color: "#6c416e"}}
                >
                    ←
                </Link>
            </div>
            <img className="w-dvw max-h-dvh lg:max-w-lg xl:max-w-1/2" src="/1st.png" alt="invitation"/>
            <div className="flex-1/2 flex flex-col gap-3 flex-1">
                <div className="flex justify-evenly gap-6">
                    <p className="text-lg sm:text-2xl lg:text-4xl font-semibold text-center flex-1 max-w-72" style={{color: "#6c416e"}} >Location</p>
                    <p className="text-lg sm:text-2xl lg:text-4xl font-semibold text-center flex-1 max-w-72" style={{color: "#6c416e"}} >Calendar</p>
                </div>
                <div className="flex justify-evenly gap-6">
                    <a className="flex justify-center" href="https://www.google.com/maps/place/Jpark+Island+Resort+and+Waterpark,+Cebu/@10.282778,123.9930105,17z/data=!4m9!3m8!1s0x33a990b5b78ec603:0x4b79bfe360b09e7c!5m2!4m1!1i2!8m2!3d10.282778!4d123.9955854!16s%2Fg%2F11bbrlskn7?entry=ttu&g_ep=EgoyMDI1MDUwNS4wIKXMDSoJLDEwMjExNDU1SAFQAw%3D%3D">
                        <img className="max-h-72" src="/jpark-qr-code.png" alt="qr code for link to google maps locations"/>
                    </a>
                    <a className="flex justify-center" href="https://www.google.com/maps/place/Jpark+Island+Resort+and+Waterpark,+Cebu/@10.282778,123.9930105,17z/data=!4m9!3m8!1s0x33a990b5b78ec603:0x4b79bfe360b09e7c!5m2!4m1!1i2!8m2!3d10.282778!4d123.9955854!16s%2Fg%2F11bbrlskn7?entry=ttu&g_ep=EgoyMDI1MDUwNS4wIKXMDSoJLDEwMjExNDU1SAFQAw%3D%3D">
                        <img className="max-h-72" src="/jpark-qr-code.png" alt="qr code for link to google maps locations"/>
                    </a>
                </div>
            </div>
        </div>
    )
}