// components/CategoriesGrid.tsx
import Link from "next/link";
import type { Category, Tool } from "@/lib/data";

type Props = {
    categories: Category[];
    tools: Tool[];
};

export default function CategoriesGrid({ categories, tools }: Props) {
    return (
        <ul className="categories-grid" role="list">
            {categories.map((cat) => (
                <li key={cat.name} className="category-card">
                    <p className="category-name">
                        <span
                            className="category-dot"
                            style={{ background: cat.color }}
                            aria-hidden="true"
                        />
                        {cat.name}
                    </p>
                    <ul className="category-tools" role="list">
                        {tools
                            .filter((t) => t.category === cat.name)
                            .map((t) => (
                                <li key={t.href}>
                                    <Link href={t.href} className="category-tool-link">
                                        → {t.title}
                                    </Link>
                                </li>
                            ))}
                    </ul>
                </li>
            ))}
        </ul>
    );
}