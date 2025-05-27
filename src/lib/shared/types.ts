export type Match = {
	id: number;
	start_date?: Date;
	end_date?: Date;
	name?: string;
	observations?: Observation[];
};

export type Observation = {
	id: number;
	kingdom: Kingdom;
	created_at: string; // timestamptz
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
