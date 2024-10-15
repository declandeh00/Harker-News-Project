/**
 * @file Display the top 20 Learders on Hacker News
 * @author Declan de Haas
 */

import TopLeaders from "@/components/TopLeaders";

// An array of the top 20 leaders
const leadersData = [
  "tptacek",
  "jacquesm",
  "ingve",
  "danso",
  "pseudolus",
  "rbanffy",
  "Tomte",
  "tosh",
  "lxm",
  "Animats",
  "patio11",
  "JumpCrisscross",
  "ColinWright",
  "todsacerdoti",
  "rayiner",
  "dragonwriter",
  "zdw",
  "ChuckMcM",
  "luu",
  "TeMPOraL",
];

const Leader = () => {
  return (
    <>
      <TopLeaders data={leadersData} />
    </>
  );
};

export default Leader;
