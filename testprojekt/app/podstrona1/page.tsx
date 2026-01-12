import Link from "next/link";

export default function podstrona1(){
    return(
        <div>
            <main className="max-w-full text-center font-bold font-size text-4xl">
                <h1>Przykładowa podstrona na branch Production</h1>
                <Link href="./">Powrót do strony głównej</Link>
            </main>
        </div>
    )
}