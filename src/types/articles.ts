export interface Article {
	_id: string;
	title: string;
	slug: string;
	body: string;
	url: string;
	pDate: string;
	emoji: {
		type: string;
		value: string;
	};
	categories: {
		_id: string;
		name: string;
		slug: string;
	}[];
}
