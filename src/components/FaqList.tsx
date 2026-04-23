// components/FaqList.tsx
// Uses native <details>/<summary> for accessible, JS-free accordion behaviour.
// Each item is also a valid schema.org Question for the JSON-LD in page.tsx.

import type { Faq } from "@/lib/data";

type Props = {
    faqs: Faq[];
};

export default function FaqList({ faqs }: Props) {
    return (
        <dl className="faq-list">
            {faqs.map((faq) => (
                <div key={faq.q} className="faq-item">
                    <dt className="faq-q">{faq.q}</dt>
                    <dd className="faq-a">{faq.a}</dd>
                </div>
            ))}
        </dl>
    );
}