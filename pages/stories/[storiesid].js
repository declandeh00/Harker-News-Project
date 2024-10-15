/**
 * @file Displaying the information about a said story
 * @author Declan de Haas
 */

import axios from "axios";
import StoriesInfo from "@/components/StoriesInfo";

const StoriesId = ({ stories }) => {
  return (
    <>
      <StoriesInfo data={[stories]} />
    </>
  );
};

export const getServerSideProps = async (context) => {
  const { storiesid } = context.params;
  const url = "https://hacker-news.firebaseio.com/v0/";
  // places the storiesid in do make the api work correctly
  const storyRes = await axios.get(`${url}item/${storiesid}.json?print=pretty`);
  return {
    props: {
      stories: storyRes.data,
    },
  };
};

export default StoriesId;
