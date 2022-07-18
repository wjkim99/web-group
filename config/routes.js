import { faChartPie, faHouse } from "@fortawesome/free-solid-svg-icons";

export default [
	{
		label: '',
		labelDisable: true,
		children: [
			{
				name: '메인화면',
				icon: faChartPie,
				to: '/',
				active: true
			},
			{
				name: '방 만들기',
				icon: faHouse,
				to: '/room',
				active: true
			},
		]
	}
];