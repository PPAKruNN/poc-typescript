type ApiError = {
  httpCode: number;
  message: string;
};

type Champion = {
  name: string;
  id: string;
  tags: string[];
  splash: string;
  square: string;
};

type ItemsData = {
  mithics: Item[];
  legendary: Item[];
  boots: Item[];
  base: Item[];
  notValid: Item[];
};

type Item = {
  name: string;
  id: string;
  tags: string[];
  url: string;
};

type ItemSet = {
  boot: Item;
  mithic: Item;
  legendaries: Item[];
};

type Rune = {
  name: string;
  id: number;
  key: string;
  url: string;
};

type RuneSet = {
  keystone: Rune;
  primaryRunes: Rune[];
  secondaryRunes: Rune[];
};

type RunesDomainData = {
  name: string;
  id: number;
  key: string;
  slots: Array<Rune>[];
};

type SummonerSpell = {
  name: string;
  id: string;
  url: string;
};

type Build = {
  Champion: Champion;
  SummonerSpells: SummonerSpell[];
  build: ItemSet;
  Rune: RuneSet;
};

export {
  ApiError,
  ItemsData,
  Item,
  Champion,
  RunesDomainData,
  Rune,
  SummonerSpell,
  Build,
  ItemSet,
  RuneSet,
};
