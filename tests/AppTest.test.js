import TopLeaders from "@/components/TopLeaders";
import Stories from "@/components/Stories";
import StoriesInfo from "@/components/StoriesInfo";
import TopLeadersInfo from "@/components/TopLeadersInfo";
import Homepage from "@/components/Homepage";

import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

/**
 * @file To run test to make sure my site works correctly.
 * @author Declan de Haas
 */

test("The Home Page should be rendered", () => {
  render(<Homepage />);
  const hackerInputElement = screen.getByTestId("Hacker-News");
  const topInputElement = screen.getByTestId("Hacker-News");
  expect(hackerInputElement).toBeInTheDocument();
  expect(topInputElement).toBeInTheDocument();
});

test("The Stories should be rendered", () => {
  // makes a test array of data
  const testData = [{ id: 1, title: "Story Test" }];
  render(<Stories data={testData} />);
  const storyInputElement = screen.getByTestId("Story-page");
  expect(storyInputElement).toBeInTheDocument();
});

test("The Top Leaders page should be rendered", () => {
  // makes a test array of data
  const testData = ["user 1"];
  render(<TopLeaders data={testData} />);
  const storyInputElement = screen.getByTestId("Top-test");
  expect(storyInputElement).toBeInTheDocument();
});

test("The Stories Info page should be rendered", () => {
  // makes a test array of data
  const testData = [{ id: 1, by: "John Doe", kids: [] }];
  render(<StoriesInfo data={testData} />);
  const storyInputElement = screen.getByTestId("Stories-Info-test");
  expect(storyInputElement).toBeInTheDocument();
});

test("The Top Leaders Info page should be rendered", () => {
  // makes a test array of data
  const testData = [{ id: 1, about: "test", submitted: [] }];
  render(<TopLeadersInfo data={testData} />);
  const storyInputElement = screen.getByTestId("TopL-Info-test");
  expect(storyInputElement).toBeInTheDocument();
});

test("Making sure that the date is displayed correctly on Stories Info page", () => {
  // makes a test array of data
  const testData = [{ id: 1, by: "", kids: [], time: 1175714200 }];
  render(<StoriesInfo data={testData} />);
  const storyInputElement = screen.getByTestId("Stories-Info-Date-test");
  expect(storyInputElement).toHaveTextContent("5 April 2007");
});

test("Making sure that the date is displayed correctly on Top Leader Info page", () => {
  // makes a test array of data
  const testData = [
    { id: 1, created: 1193928763, submitted: [], about: "", Karma: 0 },
  ];
  render(<TopLeadersInfo data={testData} />);
  const storyInputElement = screen.getByTestId("TopL-Info-Date-test");
  expect(storyInputElement).toHaveTextContent("2 November 2007");
});

test("Checking to see if N/A appears in kids when empty", () => {
  // makes a test array of data
  const testData = [{ id: 1, by: "", kids: [] }];
  render(<StoriesInfo data={testData} />);
  const storyInputElement = screen.getByTestId("Stories-Kids-test");
  expect(storyInputElement).toHaveTextContent("N/A");
});

test("Testing to see if the url show when kid array is populated", () => {
  // makes a test array of data
  const testData = [
    {
      id: 1,
      by: "",
      kids: [
        "https://hacker-news.firebaseio.com/v0/item/37425829.json?print=pretty",
      ],
    },
  ];
  render(<StoriesInfo data={testData} />);
  const storyInputElement = screen.getByTestId("Stories-Kids-test");
  expect(storyInputElement).toHaveTextContent(
    "https://hacker-news.firebaseio.com/v0/item/37425829.json?print=pretty"
  );
});

test("Testing that the links work from homepage to stories", () => {
  render(<Homepage />);
  expect(screen.getByTestId("Home-Stories-Link-test").getAttribute("href")).toBe(
    "/stories"
  );
});

test("Testing that the links work from homepage to topleaders", () => {
  render(<Homepage />);
  expect(screen.getByTestId("Home-TopL-Link-test").getAttribute("href")).toBe(
    "/topleaders"
  );
});

test("Test to see if the link works between Stories and StoriesInfo", () => {
  // makes a test array of data
  const testData = [{ id: 1 }];
  render(<Stories data={testData} />);
  expect(
    screen.getByTestId("Stories-StoriesInfo-Link-test").getAttribute("href")
  ).toBe("/stories/1");
});

test("Test to see if the link works between TopLeaders and TopLeadersInfo", () => {
  const testData = ["tptacek"];
  render(<TopLeaders data={testData} />);
  expect(screen.getByTestId("TopL-TopLInfo-Link-test").getAttribute("href")).toBe(
    "/topleaders/tptacek"
  );
});

test("Test to see if the link works for TopLeadersInfo title Submitted", () => {
  // makes a test array of data
  const testData = [
    {
      id: 1,
      created: 1193928763,
      submitted: [
        "https://hacker-news.firebaseio.com/v0/item/37458286.json?print=pretty",
      ],
      about: "",
      Karma: 0,
    },
  ];
  render(<TopLeadersInfo data={testData} />);
  expect(document.querySelector("a").getAttribute("href")).toBe(
    "https://hacker-news.firebaseio.com/v0/item/https://hacker-news.firebaseio.com/v0/item/37458286.json?print=pretty.json?print=pretty"
  );
});

test("Test to see if the link works for StoriesInfo title Kids", () => {
  // makes a test array of data
  const testData = [
    {
      id: 1,
      by: "",
      kids: [
        "https://hacker-news.firebaseio.com/v0/item/37425829.json?print=pretty",
      ],
    },
  ];
  render(<StoriesInfo data={testData} />);
  expect(document.querySelector("a").getAttribute("href")).toBe(
    "https://hacker-news.firebaseio.com/v0/item/https://hacker-news.firebaseio.com/v0/item/37425829.json?print=pretty.json?print=pretty"
  );
});
