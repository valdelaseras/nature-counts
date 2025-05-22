type Page = {
	id: string;
	displayName: string;
	path: string;
};

export const PAGES: Page[] = [
	{
		id: 'landing',
		displayName: 'Nature Counts',
		path: '/'
	},
	{
		id: 'signup',
		displayName: 'Sign up',
		path: '/signup'
	},
	{
		id: 'login',
		displayName: 'Login',
		path: '/login'
	},
	{
		id: 'dashboard',
		displayName: 'Dashboard',
		path: '/dashboard'
	},
	{
		id: 'current-matches',
		displayName: 'Current matches',
		path: '/match/current'
	},
	{
		id: 'match-history',
		displayName: 'Match history',
		path: '/match/history'
	},
	{
		id: 'new-match',
		displayName: 'New match',
		path: '/match/new'
	},
	{
		id: 'profile',
		displayName: 'Profile',
		path: '/profile'
	}
];

export const resolvePageName = (urlPath: string): string => {
	const page = PAGES.find((page: Page) => urlPath === page.path);

	return page?.displayName || '';
};

export const PAGE_PATH = Object.fromEntries(PAGES.map(({ id, path }) => [id, path])) as Record<
	(typeof PAGES)[number]['id'],
	string
>;
