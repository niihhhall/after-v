import { useEffect } from "react";

interface PageMetaProps {
    title: string;
    description?: string;
}

export function usePageMeta({ title, description }: PageMetaProps) {
    useEffect(() => {
        document.title = title;

        if (description) {
            let metaDescription = document.querySelector('meta[name="description"]');

            if (metaDescription) {
                metaDescription.setAttribute("content", description);
            } else {
                metaDescription = document.createElement("meta");
                metaDescription.setAttribute("name", "description");
                metaDescription.setAttribute("content", description);
                document.head.appendChild(metaDescription);
            }
        }
    }, [title, description]);
}
