// sanity/schemas/siteSettings.ts
import { defineField, defineType } from "sanity";

// Reusable strict image field helper
const strictImageField = (name: string, title: string) =>
  defineField({
    name,
    title,
    type: "image",
    options: { hotspot: true },
    validation: (Rule) =>
      Rule.custom((image: any) => {
        if (!image || !image.asset) return true; // Optional check
        // Sanity image asset validation can check mime types if needed
        return true;
      }),
  });

export default defineType({
  name: "siteSettings",
  title: "Site Settings",
  type: "document",
  fields: [
    defineField({ name: "portfolioName", type: "string" }),
    defineField({ name: "emailAddress", type: "string" }),
    defineField({ name: "resumeUrl", type: "url" }),
    defineField({ name: "linkedInUrl", type: "url" }),
    defineField({
      name: "heroLines",
      title: "Hero Section Lines (Line-by-Line)",
      description:
        "Each item represents a distinct line in the hero banner with rich text formatting.",
      type: "array",
      of: [
        {
          type: "object",
          name: "heroLineItem",
          title: "Line",
          fields: [
            defineField({
              name: "content",
              title: "Line Content",
              type: "array",
              of: [
                {
                  type: "block",
                  styles: [{ title: "Normal", value: "normal" }],
                  lists: [],
                  marks: {
                    decorators: [
                      { title: "Italic", value: "em" },
                      { title: "Accent / Highlight", value: "strong" },
                    ],
                    annotations: [],
                  },
                },
              ],
            }),
          ],
          preview: {
            select: {
              content: "content",
            },
            prepare({ content }) {
              const textSnippet =
                content?.[0]?.children?.[0]?.text || "Empty Line";
              return { title: textSnippet };
            },
          },
        },
      ],
    }),
    defineField({
      name: "loginBackgroundImage",
      title: "Login Background Image",
      type: "image",
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: "alt",
          type: "string",
          title: "Alt Text",
        },
      ],
    }),
    defineField({
      name: "aboutPage",
      type: "object",
      fields: [
        strictImageField("image1", "About Image 1"),
        strictImageField("image2", "About Image 2"),
        strictImageField("image3", "About Image 3"),
        {
          name: "paragraphs",
          title: "About Paragraphs (Portable Text)",
          type: "array",
          of: [
            {
              type: "block",
              styles: [{ title: "Normal", value: "normal" }],
              lists: [],
              marks: {
                decorators: [
                  { title: "Italic", value: "em" },
                  { title: "Bold / Highlight", value: "strong" },
                ],
                annotations: [
                  {
                    name: "link",
                    type: "object",
                    title: "Link",
                    fields: [
                      {
                        name: "href",
                        type: "string",
                        title:
                          "URL or Email (e.g., https://... or mailto:hello@example.com)",
                        validation: (Rule) =>
                          Rule.required().custom((value: unknown) => {
                            if (typeof value !== "string" || !value.trim()) {
                              return "Link destination is required.";
                            }
                            const url = value.trim();
                            if (
                              url.startsWith("http://") ||
                              url.startsWith("https://") ||
                              url.startsWith("mailto:") ||
                              url.startsWith("tel:") ||
                              url.startsWith("/")
                            ) {
                              return true;
                            }
                            return "Must be a valid URL, mailto: link, phone number, or relative path.";
                          }),
                      },
                    ],
                  },
                ],
              },
            },
          ],
          validation: (Rule) =>
            Rule.max(4).error(
              "You can only add up to 4 paragraphs to keep the layout clean.",
            ),
        },
      ],
    }),
  ],
});
