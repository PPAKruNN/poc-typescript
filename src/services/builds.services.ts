import { RandomNum } from "../utils/RandomNum";
import { StaticData } from "../utils/StaticData";
import { Build, ItemSet, RuneSet } from "../protocols";
import { BuildsRepository } from "../repositories/builds.repository";

async function genBuild(): Promise<Build> {
  const data = StaticData.data;

  // Champion
  const championRand = RandomNum(data.Champions.length);
  const Champion = data.Champions[championRand];

  // Summoner Spell
  const summonersRand = RandomNum(data.Summoners.length, 2, false);
  const SummonerSpells = [
    data.Summoners[summonersRand[0]],
    data.Summoners[summonersRand[1]],
  ];

  // Item build
  const bootRand = RandomNum(data.Items.boots.length);
  const mithicsRand = RandomNum(data.Items.mithics.length);
  const legendaryRand = RandomNum(data.Items.legendary.length, 4, false);

  const build: ItemSet = {
    boot: data.Items.boots[bootRand],
    mithic: data.Items.mithics[mithicsRand],
    legendaries: [
      data.Items.legendary[legendaryRand[0]],
      data.Items.legendary[legendaryRand[1]],
      data.Items.legendary[legendaryRand[2]],
      data.Items.legendary[legendaryRand[3]],
    ],
  };

  // Runes
  const domainsRand = RandomNum(data.Runes.length, 2, false);
  const primaryDomain = data.Runes[domainsRand[0]];
  const secDomain = data.Runes[domainsRand[1]];

  console.log(primaryDomain);
  const keystoneRand = RandomNum(primaryDomain.slots[0].length);
  const primaryRand = RandomNum(3, 3);

  const secColums = RandomNum(3, 2, false);
  const secRand = RandomNum(3, 2);

  const Rune: RuneSet = {
    keystone: primaryDomain.slots[0][keystoneRand],
    primaryRunes: [
      primaryDomain.slots[1][primaryRand[0]],
      primaryDomain.slots[2][primaryRand[1]],
      primaryDomain.slots[3][primaryRand[2]],
    ],
    secondaryRunes: [
      secDomain.slots[secColums[0] + 1][secRand[0]],
      secDomain.slots[secColums[1] + 1][secRand[1]],
    ],
  };

  // Assemble!
  const BuildObj: Build = {
    Champion,
    SummonerSpells,
    build,
    Rune,
  };

  return BuildObj;
}

async function create(): Promise<Number> {
  const build = await genBuild();
  const serializedBuild = JSON.stringify(build);

  const id = await BuildsRepository.create(serializedBuild);
  return id;
}

export const BuildsService = {
  create,
  genBuild,
};
