import { NextSeo } from 'next-seo';
import { useRouter } from 'next/router';

import type { ComponentProps } from 'react';

export function useSeoProps(
	props: Partial<ComponentProps<typeof NextSeo>> = {},
): Partial<ComponentProps<typeof NextSeo>> {
	const router = useRouter();

	const title = 'dorkamotorka ─ site reliability engineer';
	const description = "Hey 👋 I'm Teodor, a site reliability engineer";

	return {
		title,
		description,
		canonical: `https://dorkamotorka.github.io/${router.asPath}`,
		openGraph: {
			title,
			description,
			site_name: 'dorkamotorka',
			url: `https://dorkamotorka.github.io/${router.asPath}`,
			type: 'website',
			images: [
				{
					url: 'https://dorkamotorka.github.io/banner.png',
					alt: description,
					width: 1280,
					height: 720,
				},
			],
		},
		twitter: {
			cardType: 'summary_large_image',
			handle: '@dorkamotorka',
			site: '@dorkamotorka',
		},
		...props,
	};
}
