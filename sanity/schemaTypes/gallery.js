export default {
  name: "gallery",
  title: "Gallery Images",
  type: "document",

  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      validation: Rule => Rule.required(),
    },

    {
      name: "image",
      title: "Image",
      type: "image",

      options: {
        hotspot: true,
      },

      validation: Rule => Rule.required(),
    },

    {
      name: "alt",
      title: "Alt Text",
      type: "string",
    },

    {
      name: "order",
      title: "Display Order",
      type: "number",
      initialValue: 1,
    },
  ],
};