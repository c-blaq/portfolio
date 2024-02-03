export default {
  name: "Projects",
  type: "document",
  title: "Projects",
  fields: [
    {
      name: "image",
      title: "Image",
      type: "image",
    },
    {
      name: "name",
      type: "string",
      title: "Project Name",
    },
    {
      name: "desc",
      title: "Description",
      type: "string",
    },
    {
      name: "previewLink",
      title: "Preview Link",
      type: "string",
    },
    {
      name: "repoLink",
      title: "Repository Link",
      type: "string",
    },

    {
      name: "tags",
      title: "Tags",
      type: "array",
      of: [
        {
          name: "tag",
          title: "Tag",
          type: "string",
        },
      ],
    },
  ],
};
