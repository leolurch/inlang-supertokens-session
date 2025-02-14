import { RequiredFrontmatter } from "@inlang/website/src/services/markdown/index.js";

/**
 * The frontmatter schema used to validate the markdown files in this directory.
 */
export const FrontmatterSchema = RequiredFrontmatter;

/**
 * The table of contents is a simple list with the file name.
 *
 * The ordering in the array determines the position in the blog.
 */
export const tableOfContents: string[] = [
  (await import("./git-as-sdk.md?raw")).default,
  (await import("./notes-on-git-based-architecture.md?raw")).default,
];
