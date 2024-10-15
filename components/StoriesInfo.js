/**
 * @file Makes the layout about the top stories information
 * @author Declan de Haas
 */

import React from "react";

const StoriesInfo = ({ data }) => {
  console.log(data)
    return (
    <>
      {data.map((story, index) => (
        <div key={story.id || index}>
          <div data-testid="Stories-Info-test">
            <h1>By</h1>
            <p>{story.by}</p>
          </div>

          <div data-testid="Stories-Kids-test">
          <h1>Kids</h1>
          {/* splits the data so that only 5 will show if there is more than 5 or display N/A */}
            {story.kids.length > 0 ? (
              story.kids.slice(0, 5).map((kidId) => (
               <li key={kidId}>
                {/* this will open the link in a new tab */}
                <a
                  key={kidId}
                  href={`https://hacker-news.firebaseio.com/v0/item/${kidId}.json?print=pretty`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {`https://hacker-news.firebaseio.com/v0/item/${kidId}.json?print=pretty`}
                </a>
                </li>
              ))
            ) : (
              <p>N/A</p>
            )}
          </div>

          <div>
            <h1>Score</h1>
            <p>{story.score}</p>
          </div>

          <div data-testid="Stories-Info-Date-test">
            <h1>Time</h1>
            {/* displays an interger date/time as a readble date/time */}
            <p>{new Date(story.time * 1000).toLocaleDateString("en-GB", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}</p>
          </div>

          <div>
            <h1>Title</h1>
            <p>{story.title}</p>
          </div>

          <div>
            <h1>Type</h1>
            <p>{story.type}</p>
          </div>

          <div>
            <h1>URL</h1>
            {/* this will open the link in a new tab */}
            <a href={`https://news.ycombinator.com/item?id=${story.id}`} target="_blank" rel="noopener noreferrer">
                {`https://news.ycombinator.com/item?id=${story.id}`}
            </a>
          </div>

        </div>
      ))}
    </>
  );
};

export default StoriesInfo;
