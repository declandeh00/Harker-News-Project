/**
 * @file Display information about a said top leader on Hacker News
 * @author Declan de Haas
 */

import axios from "axios";
import TopLeadersInfo from "@/components/TopLeadersInfo";

const TopId = ({ top }) => {
  return (
    <>
      <TopLeadersInfo data={[top]} />
    </>
  );
};

export const getServerSideProps = async (context) => {
  const { topid } = context.params;
  const url = "https://hacker-news.firebaseio.com/v0/";
  // places the topid in do make the api work correctly
  const topRes = await axios.get(`${url}user/${topid}.json?print=pretty`);
  return {
    props: {
      top: topRes.data,
    },
  };
};

export default TopId;
