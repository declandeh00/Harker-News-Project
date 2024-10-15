/**
 * @file Display the titles of the top stories from Hacker News
 * @author Declan de Haas
 */

import Stories from "@/components/Stories";
import axios from "axios";
import React, { useState, useEffect } from "react";

// the url so that I don't repeat it
const url = "https://hacker-news.firebaseio.com/v0/";

const Story = ({ askData, bestData, jobData, newData, showData, topData }) => {
  const [filter, setFilter] = useState("");
  const [selectedStories, setSelectedStories] = useState([]);

  //fetches an api to get the stories title
  useEffect(() => {
    const fetchData = async (storyIds) => {
      // splits the data so only the first 40 will show
      // and maps the 40 as well
      const storyPromises = storyIds.slice(0, 40).map(async (storyId) => {
        const response = await axios.get(`${url}item/${storyId}.json?print=pretty`);
        return response.data;
      });

      const stories = await Promise.all(storyPromises);
      setSelectedStories(stories);
    };

    // this switches the data that the api is to use with the filter, using a switch case.
    switch (filter) {
      case "ask":
        fetchData(askData);
        break;
      case "best":
        fetchData(bestData);
        break;
      case "job":
        fetchData(jobData);
        break;
      case "new":
        fetchData(newData);
        break;
      case "show":
        fetchData(showData);
        break;
      case "top":
        fetchData(topData);
        break;
      default:
        fetchData(askData);
    }
  }, [filter, askData, bestData, jobData, newData, showData, topData]);

  const handleChangeFilter = (event) => {
    setFilter(event.target.value);
  };

  return (
    <>
      {/* this is the format for the filter option */}
      <div>
        <label htmlFor="filter"></label>
        <select name="filter" value={filter} onChange={handleChangeFilter}>
          <option value="ask">Ask Stories</option>
          <option value="best">Best Stories</option>
          <option value="job">Job Stories</option>
          <option value="new">New Stories</option>
          <option value="show">Show Stories</option>
          <option value="top">Top Stories</option>
        </select>
      </div>
      <Stories data={selectedStories} />
    </>
  );
};

export const getServerSideProps = async () => {
  const askRes = await axios.get(`${url}askstories.json?print=pretty`);
  const bestRes = await axios.get(`${url}beststories.json?print=pretty`);
  const jobRes = await axios.get(`${url}jobstories.json?print=pretty`);
  const newRes = await axios.get(`${url}newstories.json?print=pretty`);
  const showRes = await axios.get(`${url}showstories.json?print=pretty`);
  const topRes = await axios.get(`${url}topstories.json?print=pretty`);
  return {
    props: {
      askData: askRes.data,
      bestData: bestRes.data,
      jobData: jobRes.data,
      newData: newRes.data,
      showData: showRes.data,
      topData: topRes.data,
    },
  };
};

export default Story;
