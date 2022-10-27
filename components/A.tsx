import Link from 'next/link'

export default function A({ text, href }: { text: string, href: string }) {
    return (
        <Link href={href}>
            <div>{text}</div>
        </Link>
    )
}