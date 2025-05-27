export type Match = {
	id: number;
	uuid?: string;
	created_by?: string; // user uuid
	start_date?: Date;
	end_date?: Date;
	name?: string;
	observations?: Observation[];
};

export type Observation = {
	id: number;
	uuid?: string;
	kingdom: Kingdom;
	created_at: string; // timestamptz
	created_by: string; // user uuid
	match: string; // match uuid
	user: User;
};

type User = {
	id: number;
	uuid: string;
	name: string;
};

enum Kingdom {
	animalia,
	fungi,
	plantae,
	protista,
	unknown
}
