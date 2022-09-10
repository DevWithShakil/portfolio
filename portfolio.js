import emoji from "react-easy-emoji";

export const greetings = {
	name: "Md. Shakil Khan",
	title: "Hi all, I'm Shakil Khan",
	description:
		"A passionate Front end Web Developer having an experience of building Website with JavaScript/ ReactJS/ NodeJS/ and some other cool libraries and frameworks.",
	resumeLink:
		"https://drive.google.com/file/d/147oqxr0rynIKgVVv5E0VGHPPLRmIGWUX/view?usp=sharing",
};

export const openSource = {
	githubUserName: "DevWithShakil",
};

export const contact = {};

export const socialLinks = {
	facebook: "https://www.facebook.com/m.khanshakil07/",
	instagram: "https://www.instagram.com/md__shakil__khan/",
	twitter: "https://twitter.com/ShakilKhanSumo2",
	github: "https://github.com/DevWithShakil",
	linkedin: "https://www.linkedin.com/in/md-shakil-khan76/",
};

export const skillsSection = {
	title: "What I do",
	subTitle:
		"CRAZY MERN STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
	data: [
		{
			title: "MERN Stack Development",
			lottieAnimationFile: "/lottie/skills/fullstack.json", // Path of Lottie Animation JSON File
			skills: [
				emoji(
					"⚡ Building responsive Single-Page-Apps (SPA) & PWA in React.js"
				),
				emoji("⚡ Building responsive static websites using Next.js"),
				emoji(
					"⚡ Integration of third party services such as Firebase/ AWS"
				),
			],
			softwareSkills: [
				{
					skillName: "HTML-5",
					fontAwesomeClassname: "vscode-icons:file-type-html",
				},
				{
					skillName: "CSS-3",
					fontAwesomeClassname: "vscode-icons:file-type-css",
				},
				{
					skillName: "JavaScript",
					fontAwesomeClassname: "logos:javascript",
				},
				{
					skillName: "Reactjs",
					fontAwesomeClassname: "vscode-icons:file-type-reactjs",
				},
				{
					skillName: "Nextjs",
					fontAwesomeClassname: "vscode-icons:file-type-light-next",
				},
				// {
				// 	skillName: "Python",
				// 	fontAwesomeClassname: "logos:python",
				// },
				// {
				// 	skillName: "Django",
				// 	fontAwesomeClassname: "vscode-icons:file-type-django",
				// },

				{
					skillName: "Bootstrap",
					fontAwesomeClassname: "logos:bootstrap",
				},
				{
					skillName: "MongoDB",
					fontAwesomeClassname: "vscode-icons:file-type-db",
				},
				{
					skillName: "TypeScript",
					fontAwesomeClassname: "logos:typescript",
				},

				{
					skillName: "Redux",
					fontAwesomeClassname: "logos:redux",
				},
				{
					skillName: "NPM",
					fontAwesomeClassname: "logos:npm-icon",
				},
				{
					skillName: "Yarn",
					fontAwesomeClassname: "logos:yarn",
				},
			],
		},
		{
			title: "Cloud Infra-Architecture",
			lottieAnimationFile: "/lottie/skills/cloudinfra.json", // Path of Lottie Animation JSON File
			skills: [
				emoji("⚡ Experience of working on multiple cloud platforms"),
				emoji(
					"⚡ Hosting and maintaining websites on virtual machine instances along with integration of databases"
				),
				emoji(
					"⚡ Building CI/CD pipelines for automated testing & deployment using Github Actions"
				),
			],
			softwareSkills: [
				// ? Check README To get icon details
				{
					skillName: "AWS",
					fontAwesomeClassname: "logos:aws",
				},
				// {
				// 	skillName: "Azure",
				// 	fontAwesomeClassname: "logos:microsoft-azure",
				// },
				{
					skillName: "Heroku",
					fontAwesomeClassname: "logos:heroku-icon",
				},
				// {
				// 	skillName: "PostgreSQL",
				// 	fontAwesomeClassname: "logos:postgresql",
				// },
				{
					skillName: "Github",
					fontAwesomeClassname: "akar-icons:github-fill",
				},
				// {
				// 	skillName: "Docker",
				// 	fontAwesomeClassname: "logos:docker-icon",
				// },
				{
					skillName: "Github Actions",
					fontAwesomeClassname: "logos:github-actions",
				},
				{
					skillName: "Cloudinary",
					fontAwesomeClassname: "logos:cloudinary",
				},
				// {
				// 	skillName: "Nginx",
				// 	fontAwesomeClassname: "logos:nginx",
				// },
				// {
				// 	skillName: "Sentry",
				// 	fontAwesomeClassname: "logos:sentry-icon",
				// },
			],
		},
		// {
		// 	title: "Blockchain",
		// 	lottieAnimationFile: "/lottie/skills/ethereum.json", // Path of Lottie Animation JSON File
		// 	skills: [
		// 		emoji(
		// 			"⚡ Experience in developing Smart Contract using Solidity & Ethereum"
		// 		),
		// 		emoji(
		// 			"⚡ Building Scripts for automated testing & deployment of Smart Contracts using Brownie & Infura"
		// 		),
		// 		emoji(
		// 			"⚡ Experience of using Openzeppelin Smart Contract Standards & Chainlink Oracles"
		// 		),
		// 		emoji(
		// 			"⚡ Developing NFT Smart Contracts using ERC-721 Token Standard"
		// 		),
		// 		emoji(
		// 			"⚡ Building Dapps with React.js & Solidity using Web3.js, Moralis & IPFS"
		// 		),
		// 	],
		// 	softwareSkills: [
		// 		{
		// 			skillName: "Ethereum",
		// 			fontAwesomeClassname: "logos:ethereum",
		// 		},
		// 		{
		// 			skillName: "Solidity",
		// 			fontAwesomeClassname: "logos:solidity",
		// 		},
		// 		{
		// 			skillName: "Web3js",
		// 			fontAwesomeClassname: "logos:web3js",
		// 		},
		// 		{
		// 			skillName: "Metamask",
		// 			fontAwesomeClassname: "logos:metamask-icon",
		// 		},
		// 		{
		// 			skillName: "Ganache",
		// 			fontAwesomeClassname: "logos:ganache-icon",
		// 		},
		// 	],
		// },
	],
};

export const SkillBars = [
	{
		Stack: "Frontend/Design", //Insert stack or technology you have experience in
		progressPercentage: "90", //Insert relative proficiency in percentage
	},
	{
		Stack: "Backend",
		progressPercentage: "60",
	},
	{
		Stack: "Programming",
		progressPercentage: "40",
	},
];

export const educationInfo = [
	{
		schoolName: "Institute of Science and Technology",
		subHeader: "BSc in Computer Science and Engineering ",
		duration: "November 2019 -  November 2024",
		// descBullets: [
		// 	"Lorem ipsum dolor sit amet, consectetur adipdfgiscing elit",
		// 	"Lorem ipsum dolor sit amet, consectetur adipiscing elit",
		// ],
	},
];

export const experience = [
	{
		role: " Junior Frontend Developer",
		company: "Marketing Doorway",
		companylogo: "https://i.ibb.co/2jbdPHK/Resized-New-Logo.png",
		date: "March 2019 – June 2020",
		desc: "I worked as Junior frontend web developer to design web based admin dashboards for mulitiple apps using Html, Css, Bootstrap, Javascript, React.Js, Redux, Nextjs, Typescript, Firebase Authentication, Vercel Deployment and some other libraries.",
	},
	// {
	// 	role: "API Engineer",
	// 	company: "Duseca Software",
	// 	companylogo: "/img/icons/common/dusecaSoftware.jpg",
	// 	date: "Jan 2022 – Mar 2022",
	// 	desc: "I worked as API Engineer on a Kale App. Kale is a community platform for the creation of social reviews based on verified transactions. I built Fully Optimized and High Performance RESTful APIs using Django, DjangoRESTFramework, PostgresSQL, JWT Authentication, AWS, Integrated Plaid APIs for Fetching Bank Transactions, Integrated Sentry for monitoring Django Server and deployed the API on Heroku Server.",
	// 	// descBullets: [
	// 	// 	"Lorem ipsum dolor sit amet, consdfgectetur adipiscing elit",
	// 	// 	"Lorem ipsum dolor sit amet, consectetur adipiscing elit",
	// 	// ],
	// },
	// {
	// 	role: "Full Stack Developer",
	// 	company: "Bleed-AI",
	// 	companylogo: "/img/icons/common/bleedAI.jpg",
	// 	date: "Sept 2021 - Oct 2021",
	// 	desc: "Worked as django web developer to create a website in which I integrated computer vision AI model (built by the team of BleedAI) to process YouTube URLs and show Real Time processing on Website using Django Channels WebSockets , threading for running multiple instances of AI Model, jQuery for UI rendering and deployed it on Heroku server.",
	// },
	// {
	// 	role: "Backend Developer",
	// 	company: "Wapidu",
	// 	companylogo: "/img/icons/common/wapidu.jpg",
	// 	date: "Sept 2021",
	// 	desc: "Worked as a Django Developer to integrate Stripe payment gateway in wapidu.com and Created REST APIs using Django REST Framework to integrate Django Stripe backend to Vue.js Frontend and Deployed it on Azure based Docker container registry.",
	// },
];

export const projects = [
	{
		name: "Portfolio",
		desc: "MERN Stack Developer Portfolio built with react.js and next.js bootstrap.",
		github: "https://github.com/DevWithShakil/developer-portfolio-site.git",
		link: "https://developer-portfolio-site.vercel.app/",
	},
	{
		name: "Zoomla",
		desc: "Zoomla is an video conferencing web application. It's my team work, I built the part of Video Conference Room. In this web application technology we used ReactJS, Video Sdk, CometChat, Soket.io, Matrerial Taiwind etc.",
		github: "https://github.com/DevWithShakil",
		link: "https://zoomla.vercel.app/"
	},
	{
		name: "To-Do",
		desc: "One of the most important reasons you should use a to do list is that it will help you stay organised. When you write all your tasks in a list, they seem more manageable. When you've got a clear outline of the tasks you've got to do and those you've completed, it helps you stay focused. This is To-Do react web application. Built with Html, Css, Bootstrap, Taiwind, Javascript, ReactJs. ",
		github: "https://github.com/DevWithShakil/todo.git",
		link: "https://todo-e949a.web.app/"
	},
	{
		name: "Wheels BD (Ecommerce)",
		desc: "Wheels BD is an Ecommerce Website. Where technology used Html, Css, Bootstrap, Javascript, ReactJs, Firebase Authentication. This a simple website, I built it when learning reactJS.",
		github: "https://github.com/1hanzla100/Django-ecommerce",
		link: "https://wheels-bd.web.app/"
	},
];

export const feedbacks = [
	{
		name: "Zubayer Hossain",
		feedback:
			"Even though the outcome wasn’t what we wanted, I want to congratulate you on all of the hard work you put in over the past few weeks. If we apply that same effort to our next project, I believe we can win.",
	},
	{
		name: "Mr. Harish",
		feedback:
			"You put so much hard work into getting this client, and it really paid off. Thanks to your focus and determination in going the extra mile and managing all of the complexities of this project, we met our goals.",
	},
];

// See object prototype on SEO.jsx page
export const seoData = {
	title: "Md. Shakil Khan",
	description:
		"A passionate MERN Stack Web Developer.",
	author: "Md. Shakil Khan",
	image: "https://i.ibb.co/p2zPytf/20220710181749-IMG-1122.jpg",
	url: "https://developer-portfolio-1hanzla100.vercel.app",
	keywords: [
		"Shakil",
		"Md. Shakil Khan",
		"DevWithShakil",
		"Portfolio",
		"Shakil Portfolio ",
		"Shakil Khan Portfolio",
	],
}