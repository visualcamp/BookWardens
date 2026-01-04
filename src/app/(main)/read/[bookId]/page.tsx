import ReadClient from "./ReadClient";

export async function generateStaticParams() {
    return [
        { bookId: "1" },
        { bookId: "2" },
        { bookId: "3" },
    ];
}

export default function Page() {
    return <ReadClient />;
}
