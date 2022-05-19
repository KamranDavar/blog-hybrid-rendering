export type user = {
  "id": number,
  "name": string,
  "username": string,
  "email": string,
  "address": {
    "street": string,
    "suite": string,
    "city": string,
    "zipcode": string,
    "geo": {
      "lat": string,
      "lng": string
    }
  },
  "phone": string,
  "website": string,
  "company": {
    "name": string,
    "catchPhrase": string,
    "bs": string
  }
};

export type post = {
  "userId": number,
  "id": number,
  "title": string,
  "body": string
};
export type posts = post[];
export type users = user[];
export type GetPostsResponse = {
  data: posts;
};
export type GetUsersResponse = {
  data: users;
};


export type character = {
  char_id: number;
  name: string;
  birthday: string;
  occupation: string;
  img: string;
  status: string;
  appearance: number[];
  nickname: string;
  portrayed: string;
};

export type characters = character[];


export type GetCharactersResponse = {
  data: characters;
};

export type quote = {
  quote_id: number;
  quote: string;
  author: string;
  series: string;
};

export type quotes = quote[];

export type GetQuoteResponse = {
  data: quotes;
};

export type GetQuoteResponseParams = {
  author?: string;
};

export type sortByType = "name" | "nickname" | "birthday" | undefined;
export type sortFromType = 1 | -1 | undefined;
export type searchType = string | undefined;
