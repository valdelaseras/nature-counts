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
	user_profile: Profile;
};

// User profile
export type Profile = {
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
