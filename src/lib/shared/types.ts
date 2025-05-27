export type Match = {
	id: number;
	start_date?: string;
	end_date?: string;
	name?: string;
	observations?: Observation[];
};

export type Observation = {
	id: number;
	kingdom: Kingdom;
	created_at: string;
	match: string; // match id
	user: User;
};

type User = {
	id: number;
	name: string;
};

enum Kingdom {
	animalia,
	fungi,
	plantae,
	protista,
	unknown
}
