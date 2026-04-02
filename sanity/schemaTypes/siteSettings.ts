import { defineField, defineType } from "sanity";

export default defineType({
  name: "siteSettings",
  title: "Site Settings",
  type: "document",
  fields: [
    defineField({ name: "portfolioName", type: "string" }),
    defineField({ name: "emailAddress", type: "string" }),
    defineField({ name: "resumeUrl", type: "url" }),
    defineField({ name: "linkedInUrl", type: "url" }),
    defineField({ name: "behanceUrl", type: "url" }),
    defineField({
      name: "heroLines",
      title: "Hero Section Lines",
      description:
        "Define the animated/styled text lines for the homepage hero.",
      type: "array",
      of: [
        {
          type: "object",
          name: "heroLine",
          title: "Hero Line",
          fields: [
            defineField({ name: "text", type: "string", title: "Main Text" }),
            defineField({
              name: "highlight",
              type: "string",
              title: "Highlight Text",
              description: "Text with accent color",
            }),
            defineField({
              name: "isItalic",
              type: "boolean",
              title: "Italicize Line?",
              initialValue: false,
            }),
          ],
          preview: {
            select: {
              title: "text",
              subtitle: "highlight",
            },
            prepare({ title, subtitle }) {
              return {
                title: title || "New Line",
                subtitle: subtitle ? `Highlight: ${subtitle}` : "No highlight",
              };
            },
          },
        },
      ],
    }),
    defineField({
      name: "aboutPage",
      type: "object",
      fields: [
        { name: "image1", type: "image" },
        { name: "image2", type: "image" },
        { name: "image3", type: "image" },
        {
          name: "paragraphs",
          title: "About Paragraphs",
          type: "array",
          of: [{ type: "text" }],
          validation: (Rule) =>
            Rule.max(4).error(
              "You can only add up to 4 paragraphs to keep the layout clean.",
            ),
        },
      ],
    }),
  ],
});
