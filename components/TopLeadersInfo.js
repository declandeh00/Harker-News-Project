/**
 * @file Makes the layout about the top leaders information
 * @author Declan de Haas
 */

import React from "react";

const TopLeadersInfo = ({ data }) => {
  return (
    <>
      {data.map((leader) => (
        <div key={leader.id}>
          <div data-testid="TopL-Info-test">
            <h1>About</h1>
            <p>{leader.about}</p>
          </div>

          <div data-testid="TopL-Info-Date-test">
            <h1>Created</h1>
            <p>
              {/* displays an interger date/time as a readble date/time */}
              {new Date(leader.created * 1000).toLocaleDateString("en-GB", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </p>
          </div>

          <div>
            <h1>ID</h1>
            <p>{leader.id}</p>
          </div>

          <div>
            <h1>Karma</h1>
            <p>{leader.karma}</p>
          </div>

          <div data-testid="TopL-Link-test">
            <h1>Submitted</h1>
            {/* splits the data so that only 10 will show if there is more than 10 */}
            {leader.submitted.length > 0 && (
              <ul>
                {leader.submitted.slice(0, 10).map((subId) => (
                  <li key={subId}>
                    {/* this will open the link(s) in a new tab */}
                    <a
                      href={`https://hacker-news.firebaseio.com/v0/item/${subId}.json?print=pretty`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {`https://hacker-news.firebaseio.com/v0/item/${subId}.json?print=pretty`}
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      ))}
    </>
  );
};

export default TopLeadersInfo;
