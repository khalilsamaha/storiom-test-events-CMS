import {visionTool} from "@sanity/vision"
import {defineConfig} from "sanity"
import {structureTool} from "sanity/structure"

import {apiVersion, dataset, projectId} from "./src/sanity/env"
import {schemaTypes} from "./src/sanity/schemaTypes"

export default defineConfig({
  basePath: "/studio",
  name: "default",
  title: "Storiom Saliba Events Page",
  projectId,
  dataset,

  plugins: [
    structureTool(),
    visionTool({defaultApiVersion: apiVersion}),
  ],

  schema: {
    types: schemaTypes,
  },
})
