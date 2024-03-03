import dynamic from 'next/dynamic';
import { differenceInYears } from 'date-fns';
import { Icon } from '@iconify/react';
import Image from 'next/image';

import { Animate, Button, Pill } from '~/components';
import { NavigationItemType } from '~/types';
import { Layout } from '~/layouts';

import type { EventProps } from '~/components/Event.component';
import type { NavigationItem } from '~/types';

import ProfilePicture from '../public/profile-photo.jpg';
const myLoader = ({ src, width, quality }) => {
	return `${src}?w=${width}&q=${quality || 75}`;
};
const Event = dynamic<EventProps>(
	() => import('~/components/Event.component').then(({ Event }) => Event),
	{
		ssr: false,
	},
);

const ACTIONS: Array<NavigationItem> = [
	{
		type: NavigationItemType.LINK,
		external: true,
		href: 'https://github.com/dorkamotorka',
		icon: <Icon className="mr-3" icon="feather:github" />,
		text: 'GitHub',
	},
	{
		type: NavigationItemType.LINK,
		href: 'https://medium.com/@cloudchirp',
		icon: <Icon className="mr-3" icon="akar-icons:medium-fill" />,
		text: 'Medium',
	},
	{
		type: NavigationItemType.LINK,
		href: '/projects',
		icon: <Icon className="mr-3" icon="feather:copy" />,
		text: 'Projects',
	},
];

export default function HomePage() {
	const description = 'A developer who prefers the thrills of infrastructure.';
	const age = (new Date().getFullYear() - 1998).toString();

	return (
		<Layout.Default>
			<div className="">
				<div className="flex items-center justify-center min-h-screen py-12">
					<div className="w-full max-w-lg space-y-8 text-center sm:max-w-2xl md:sm:max-w-2xl lg:sm:max-w-7xl">
						<Animate
							as="h1"
							animation={{
								opacity: [0, 1],
								scale: [0.75, 1],
							}}
							className="text-4xl font-extrabold tracking-tight text-gray-500 dark:text-white sm:text-6xl md:text-6xl lg:text-7xl">
								Hey! I am Teodor (Janez) Podobnik 🚀 <br className="hidden sm:block" />{' '}
							<Pill.Standard className="mt-4 text-2xl font-semibold sm:text-4xl">
								Site Reliability Engineer
							</Pill.Standard>
						</Animate>

						<Animate
							as="p"
							animation={{
								opacity: [0, 1],
								scale: [0.75, 1],
							}}
							className="max-w-xs mx-auto mt-4 text-base text-gray-300 md:mt-8 sm:text-lg md:text-2xl md:max-w-3xl"
							transition={{
								delay: 0.5,
							}}>
							{description}
						</Animate>

						<div className="flex flex-col items-center justify-center w-full mt-8 space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0 sm:mt-4">
							{ACTIONS.map((action, index) => {
								if (action.type !== NavigationItemType.LINK) return null;

								return (
									<Animate
										animation={{
											y: [50, 0],
											opacity: [0, 1],
										}}
										className="w-full sm:w-auto"
										key={index}
										transition={{
											delay: 0.1 * (index + 2) + 0.5,
										}}>
										<Button.Outline target="_blank" href={action.href}>
											{action.icon}
											<span>{action.text}</span>
										</Button.Outline>
									</Animate>
								);
							})}
						</div>
					</div>
				</div>
				<div className="grid items-center justify-center min-h-screen py-12 md:grid-cols-2 gap-04">
					<div className="w-full max-w-lg space-y-8 text-center sm:max-w-2xl md:sm:max-w-2xl lg:sm:max-w-7xl">
						<Animate
							as="p"
							animation={{
								opacity: [0, 1],
								scale: [0.75, 1],
							}}
							className="max-w-xs mx-auto mt-4 text-base text-white whitespace-pre-line md:mt-8 sm:text-lg md:text-2xl md:max-w-3xl"
							transition={{
								delay: 0.5,
							}}>
								I am from Ljubljana - Slovenia, and I started in the world of technology by studying computer networks back in high school. <br />
								I graduated in Computer Science at University of Ljubljana, where I had the opportunity to participate in various projects 
								ranging from creating robots, applications, and startup ideas.
							<br />
							<br />
								Since then, I have always tried to stay updated in both the Dev and Ops areas. 
								I love development, but I also enjoy the complexity that infrastructure brings. 
								Currently, I am an SRE (Site Reliability Engineer), and I help development teams create scalable, observable, and resilient services with the right tools. :)
							<br />
							<br />
								I love favoriting repositories on GitHub in search of new projects and ideas!
						</Animate>
					</div>
					<div className="flex items-center justify-center w-full max-w-lg space-y-8 text-center sm:max-w-2xl md:sm:max-w-2xl lg:sm:max-w-7xl">
						<div className="relative w-[20rem] h-[30rem] md:h-[40rem] md:w-[30rem]">
							<Image
								src={ProfilePicture}
								alt="Logo"
								layout="fill"
								loader={myLoader}
								objectFit="cover"
								className="rounded" // you can use other classes here too
							/>
						</div>
					</div>
				</div>
			</div>
		</Layout.Default>
	);
}
