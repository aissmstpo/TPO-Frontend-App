export const companyMenu = [
	{
		title: 'Placement',
		titleIcon: <GroupAddIcon />,
		Sublist: ['Start Placement Drive', 'Request Phase Date', 'Current Placement Details', 'View Placements Held'],
		SublistIcon: [<PlayArrowIcon />, <EventIcon />, <DetailIcon />, <CheckCircleIcon />],
		SublistLink: ['start-placement-drive', 'request-date', 'current-placement', 'view-placements'],
	},
	{
		title: 'Notices & Posts',
		titleIcon: <BusinessIcon />,
		Sublist: ['View Notices and Posts', 'Create Post/Notice', 'QnA'],
		SublistIcon: [<LocalPostOfficeIcon />, <PostAddIcon />, <QuestionAnswerIcon />],
		SublistLink: ['view-notices', 'create-post', 'QnA'],
	},
];

export const adminMenu = [
	{
		title: 'Student',
		titleIcon: <PeopleIcon />,
		Sublist: ['View Students', 'Approve Registrations'],
		SublistIcon: [<FormatListNumberedIcon />, <CheckCircleIcon />],
		SublistLink: ['/view-students', '/approve-students'],
	},
	{
		title: 'Company',
		titleIcon: <BusinessIcon />,
		Sublist: [
			'View Company Details',
			'Approve Registrations',
			'Approve Date for Campus Placement',
			'View Upcoming Placements',
			'View Ongoing Placements',
			'View Placement Completed',
		],
		SublistIcon: [
			<FormatListNumberedIcon />,
			<CheckCircleIcon />,
			<CheckCircleIcon />,
			<FormatListNumberedIcon />,
			<FormatListNumberedIcon />,
			<FormatListNumberedIcon />,
		],
		SublistLink: [
			'/view-company',
			'/approve-company',
			'/approve-date',
			'/upcoming-placements',
			'/ongoing-placements',
			'/view-placements',
		],
	},
	{
		title: 'College',
		titleIcon: <SchoolIcon />,
		Sublist: ['View Placement Statistics', 'QnA'],
		SublistIcon: [<FormatListNumberedIcon />, <QuestionAnswerIcon />],
		SublistLink: ['/statistics', '/QnA'],
	},
];
