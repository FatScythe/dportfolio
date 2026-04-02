import { defineField, defineType } from "sanity";

export default defineType({
  name: "project",
  title: "Project",
  type: "document",
  fields: [
    defineField({ name: "name", type: "string" }),
    defineField({ name: "slug", type: "slug", options: { source: "name" } }),
    defineField({
      name: "portfolioWork",
      type: "object",
      fields: [
        { name: "title", type: "string" },
        { name: "subtitle", type: "string" },
        { name: "headerImg", type: "image" },
        { name: "headerText", type: "text" },
        {
          name: "sections",
          type: "array",
          of: [
            {
              type: "object",
              name: "sectionItem",
              fields: [
                { name: "title", type: "string" },
                { name: "paragraph", type: "text" },
                {
                  name: "images",
                  title: "Image Gallery",
                  type: "array",
                  of: [
                    {
                      type: "object",
                      name: "galleryItem",
                      title: "Gallery Image",
                      fields: [
                        {
                          name: "title",
                          type: "string",
                          title: "Image Title/Alt Text",
                        },
                        {
                          name: "image",
                          type: "image",
                          title: "File Upload",
                          options: { hotspot: true }, // Allows you to crop/focus the image in the CMS
                        },
                        {
                          name: "canViewFullSize",
                          type: "boolean",
                          title: "Allow full-size view?",
                          initialValue: true,
                        },
                      ],
                      // This makes the list item in the CMS show the thumbnail and title
                      preview: {
                        select: {
                          title: "title",
                          media: "image",
                        },
                      },
                    },
                  ],
                },
                {
                  type: "object",
                  name: "quoteBlock",
                  title: "Quote",
                  fields: [
                    { name: "text", type: "text", title: "Quote Text" },
                    { name: "author", type: "string", title: "Author" },
                  ],
                },

                {
                  name: "subText",
                  title: "Sub Text (Key-Value Pairs)",
                  type: "array",
                  of: [
                    {
                      type: "object",
                      fields: [
                        {
                          name: "key",
                          type: "string",
                          title: "Label (e.g. Role)",
                        },
                        {
                          name: "value",
                          type: "string",
                          title: "Value (e.g. Lead Designer)",
                        },
                      ],
                    },
                  ],
                },
                {
                  name: "list",
                  title: "List Items",
                  type: "array",
                  of: [{ type: "string" }],
                },
              ],
            },
          ],
        },
      ],
    }),
  ],
});
