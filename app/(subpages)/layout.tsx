import BreadCrumb from "./components/breadcrumb/";

export default function Subpages({ children, header }: { children: React.ReactNode, header: React.ReactNode}) {
    return (
        <>
            <BreadCrumb />
            {children}
        </>
    )
}