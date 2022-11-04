import fs from "node:fs/promises";
import { parseValidateAndRender } from "@src/services/markdoc/parseValidateAndRender.js";
import { Header } from "./Header.jsx";
import { Navigation } from "./Navigation.jsx";
import { Footer } from "./Footer.jsx";

import type { PageHead } from "@src/renderer/types.js";
// import data from "./directory.json";

export const Head: PageHead = () => {
	return {
		title: "Documentation",
		description: "Documentation",
	};
};

// TODO #156 extract tableOfContents to separate file?
const sections = [
	{
		title: "Introduction",
		documents: [
			{ title: "Getting started", href: "/documentation" },
			{ title: "Installation", href: "/" },
		],
	},
	{
		title: "Guide ",
		documents: [
			{ title: "Getting started", href: "/" },
			{ title: "Installation", href: "/" },
		],
	},
	{
		title: "Start",
		documents: [
			{ title: "Getting started", href: "/" },
			{ title: "Installation", href: "/" },
		],
	},
	{
		title: "Whatsapp",
		documents: [
			{ title: "Getting started", href: "/" },
			{ title: "Installation", href: "/" },
		],
	},
	{
		title: "Samuel",
		documents: [
			{ title: "Getting started", href: "/" },
			{ title: "Installation", href: "/" },
		],
	},
	{
		title: "Klaus",
		documents: [
			{ title: "Getting started", href: "/" },
			{ title: "Installation", href: "/" },
		],
	},
	{
		title: "Test",
		documents: [
			{ title: "Getting started", href: "/" },
			{ title: "Installation", href: "/" },
		],
	},
	{
		title: "Test",
		documents: [
			{ title: "Getting started", href: "/" },
			{ title: "Installation", href: "/" },
		],
	},
];

export async function onBeforeRender() {
	// try {
	// 	const content = await fs.readFile(
	// 		"../../documentation/getting-started.md",
	// 		"utf-8"
	// 	);
	// } catch (error) {
	// 	if (error.code === "ENOENT") {
	// 		console.log("File not found!");
	// 	} else {
	// 		throw err;
	// 	}
	// }
	const text = await fs.readFile(
		"../../documentation/getting-started.md",
		"utf8",
		(err, data) => {
			if (err) {
				console.error(err);
				return;
			}
			console.log(data);
		}
	);

	const markdown = parseValidateAndRender(text);
	return {
		pageContext: {
			pageProps: {
				markdown,
			},
		},
	};
}

type PageProps = {
	markdown: string;
};

export function Page(props: PageProps) {
	return (
		<>
			<div class="mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-8">
				<Header />
				<div class=" flex ">
					<Navigation sections={sections} />
					<div class=" w-full prose" innerHTML={props.markdown}></div>;
				</div>
				{/* <Footer /> */}
			</div>
		</>
	);
}
