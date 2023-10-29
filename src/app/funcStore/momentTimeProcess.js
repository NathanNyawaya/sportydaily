import moment from "moment";

export const getTimeAgo = (givenTime) => {
  const currentTime = moment();
  const timeAgo = moment(givenTime).from(currentTime);
  return timeAgo;
};
