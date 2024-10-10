import ScrollToTop from "react-scroll-to-top"

/* eslint-disable react/prop-types */
export function Footer({href, texto}) {
    return (
        <>
            <footer className="flex flex-col items-center w-full space-y-7 h-20 ">
                <a className="text-5xl mt-6" href={href}>{texto}</a>
                <ScrollToTop smooth/>
            </footer>
        </>
    )
}