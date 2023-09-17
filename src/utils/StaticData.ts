import fs from "fs";
import path from "path";
import { Champion, ItemsData, RunesDomainData, SummonerSpell } from "protocols";

function LoadAll() {
  const RawChampions = fs.readFileSync(
    path.resolve(__dirname, "../static/Champions.json")
  );
  const RawItems = fs.readFileSync(
    path.resolve(__dirname, "../static/Items.json")
  );
  const RawRunes = fs.readFileSync(
    path.resolve(__dirname, "../static/Runes.json")
  );
  const RawSummoners = fs.readFileSync(
    path.resolve(__dirname, "../static/Summoners.json")
  );

  const Champions: Champion[] = JSON.parse(RawChampions.toString());
  const Items: ItemsData = JSON.parse(RawItems.toString());
  const Runes: RunesDomainData[] = JSON.parse(RawRunes.toString());
  const Summoners: SummonerSpell[] = JSON.parse(RawSummoners.toString());

  const data = {
    Champions,
    Items,
    Runes,
    Summoners,
  };

  return data;
}

const data = LoadAll();

export const StaticData = { LoadAll, data };
