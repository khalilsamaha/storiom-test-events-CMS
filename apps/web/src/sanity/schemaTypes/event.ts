import {defineField, defineType} from "sanity"

export const eventType = defineType({
  name: "event",
  title: "Event",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Event Title",
      type: "string",
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: "slug",
      title: "URL Slug",
      type: "slug",
      options: {source: "title", maxLength: 96},
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: "status",
      title: "Event Status",
      type: "string",
      options: {
        list: [
          {title: "Past Event", value: "past"},
          {title: "Ongoing Event", value: "ongoing"},
          {title: "Upcoming Event", value: "upcoming"},
        ],
      },
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: "startDate",
      title: "Start Date",
      type: "date",
    }),
    defineField({
      name: "endDate",
      title: "End Date",
      type: "date",
    }),
    defineField({
      name: "shortDescription",
      title: "Short Description",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "description",
      title: "Full Description",
      type: "array",
      of: [{type: "block"}],
    }),
    defineField({
      name: "coverImage",
      title: "Cover Image",
      type: "image",
      options: {hotspot: true},
    }),
    defineField({
      name: "gallery",
      title: "Photo Gallery",
      type: "array",
      of: [{type: "image", options: {hotspot: true}}],
    }),
    defineField({
      name: "published",
      title: "Published",
      type: "boolean",
      initialValue: false,
    }),
  ],
})
