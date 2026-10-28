import { defineField, defineType } from "sanity";

const strictImageField = (name: string, title: string) =>
  defineField({
    name,
    title,
    type: "image",
    options: { hotspot: true },
    validation: (Rule) =>
      Rule.custom((image: any) => {
        if (!image || !image.asset) return true;
        if (!image.asset._ref && !image.asset._url) {
          return "Only valid image file types are allowed.";
        }
        return true;
      }),
  });

export default defineType({
  name: "project",
  title: "Project",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Project Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "name", maxLength: 96 },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "projectType",
      title: "Project Type",
      type: "string",
      options: {
        list: [
          { title: "Web App", value: "web" },
          { title: "Mobile App", value: "mobile" },
          { title: "Graphic Design / Presentation", value: "graphic" },
        ],
        layout: "dropdown",
      },
      initialValue: "web",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "portfolioWork",
      title: "Portfolio Work Details",
      type: "object",
      fields: [
        defineField({
          name: "title",
          title: "Page Title (Accent Color)",
          type: "string",
        }),
        defineField({ name: "subtitle", title: "Subtitle", type: "string" }),
        defineField({
          name: "headerImage",
          title: "Header Image",
          type: "object",
          fields: [
            strictImageField("image", "Image File"),
            defineField({
              name: "sizeMode",
              title: "Image Size",
              type: "string",
              options: {
                list: [
                  { title: "Full Size (Widescreen)", value: "fullSize" },
                  {
                    title: "Mobile Size (Vertical framing)",
                    value: "mobileSize",
                  },
                ],
                layout: "radio",
              },
              initialValue: "fullSize",
            }),
            defineField({
              name: "subtext",
              title: "Subtext / Caption",
              type: "string",
            }),
          ],
        }),
        defineField({
          name: "headerSubtitle",
          title: "Header Subtitle / Summary",
          type: "text",
        }),
        defineField({
          name: "sections",
          title: "Case Study Sections",
          type: "array",
          of: [
            {
              type: "object",
              name: "sectionItem",
              title: "Section",
              fields: [
                defineField({
                  name: "title",
                  title: "Section Title",
                  type: "string",
                }),
                defineField({
                  name: "paragraph",
                  title: "Paragraph 1 (Portable Text - Bold/Italic)",
                  type: "array",
                  of: [
                    {
                      type: "block",
                      styles: [{ title: "Normal", value: "normal" }],
                      lists: [],
                      marks: {
                        decorators: [
                          { title: "Strong (Bold)", value: "strong" },
                          { title: "Emphasis (Italic)", value: "em" },
                        ],
                      },
                    },
                  ],
                }),
                defineField({
                  name: "fullSize",
                  title: "Full Width on Desktop?",
                  description:
                    "If checked, section spans full width on desktop. On mobile, all sections are full width.",
                  type: "boolean",
                  initialValue: true,
                }),
                // Optional Images 1
                defineField({
                  name: "images",
                  title: "Images (Optional)",
                  type: "array",
                  of: [
                    {
                      type: "object",
                      fields: [
                        strictImageField("image", "Image File"),
                        defineField({
                          name: "fullSize",
                          title: "Full Size Image?",
                          type: "boolean",
                          initialValue: true,
                        }),
                        defineField({
                          name: "subtext",
                          title: "Subtext / Alt",
                          type: "string",
                        }),
                      ],
                    },
                  ],
                }),
                // Quotes (Side by side on desktop, stacked on mobile)
                defineField({
                  name: "quotes",
                  title: "Quotes (Optional, Side-by-Side)",
                  type: "array",
                  of: [
                    {
                      type: "object",
                      fields: [
                        defineField({
                          name: "text",
                          title: "Quote Text",
                          type: "text",
                        }),
                        defineField({
                          name: "author",
                          title: "Author / Role",
                          type: "string",
                        }),
                      ],
                    },
                  ],
                }),
                // Paragraph 2 with bullets
                defineField({
                  name: "paragraph2",
                  title: "Paragraph 2 / Bullet Points (Optional)",
                  type: "array",
                  of: [
                    {
                      type: "block",
                      styles: [{ title: "Normal", value: "normal" }],
                      lists: [{ title: "Bullet", value: "bullet" }],
                      marks: {
                        decorators: [
                          { title: "Strong (Bold)", value: "strong" },
                          { title: "Emphasis (Italic)", value: "em" },
                        ],
                      },
                    },
                  ],
                }),
                // Optional Images 2
                defineField({
                  name: "images2",
                  title: "Additional Images (Optional)",
                  type: "array",
                  of: [
                    {
                      type: "object",
                      fields: [
                        strictImageField("image", "Image File"),
                        defineField({
                          name: "fullSize",
                          title: "Full Size Image?",
                          type: "boolean",
                          initialValue: true,
                        }),
                        defineField({
                          name: "subtext",
                          title: "Subtext / Alt",
                          type: "string",
                        }),
                      ],
                    },
                  ],
                }),
                // Optional Banner (demarcated with lines above and below)
                defineField({
                  name: "banner",
                  title: "Banner / Highlights Bar (Optional)",
                  description:
                    "Demarcated with lines above and below with an optional title.",
                  type: "object",
                  fields: [
                    defineField({
                      name: "bannerTitle",
                      title: "Banner Title",
                      type: "string",
                    }),
                    defineField({
                      name: "bannerTexts",
                      title: "Banner Texts",
                      type: "array",
                      of: [{ type: "string" }],
                    }),
                  ],
                }),
              ],
            },
          ],
        }),
      ],
    }),
  ],
});
