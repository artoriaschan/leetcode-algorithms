/**
 * Your Twitter object will be instantiated and called as such:
 * var obj = new Twitter()
 * obj.postTweet(userId,tweetId)
 * var param_2 = obj.getNewsFeed(userId)
 * obj.follow(followerId,followeeId)
 * obj.unfollow(followerId,followeeId)
 */
// eslint-disable-next-line no-unused-vars
class Twitter {
  /**
   * Initialize your data structure here.
   */
  constructor() {
    this.tweetMap = [];
    this.subscribeMap = new Map();
  }

  /**
   * Compose a new tweet.
   * @param {number} userId
   * @param {number} tweetId
   * @return {void}
   */
  postTweet(userId, tweetId) {
    const tweetObj = {
      userId,
      tweetId,
    };
    this.tweetMap.unshift(tweetObj);
  }

  /**
   * Retrieve the 10 most recent tweet ids in the user's news feed.
   * Each item in the news feed must be posted by users who the user followed or by the user herself.
   * Tweets must be ordered from most recent to least recent.
   * @param {number} userId
   * @return {number[]}
   */
  getNewsFeed(userId) {
    let userIds = [userId];
    const newsFeed = [];
    const subscribes = this.subscribeMap.get(userId);
    if (subscribes) userIds = userIds.concat(Array.from(subscribes));
    for (let tweet of this.tweetMap) {
      if (userIds.includes(tweet.userId)) {
        if (newsFeed.length < 10) {
          newsFeed.push(tweet.tweetId);
        } else {
          break;
        }
      }
    }
    return newsFeed;
  }

  /**
   * Follower follows a followee. If the operation is invalid, it should be a no-op.
   * @param {number} followerId
   * @param {number} followeeId
   * @return {void}
   */
  follow(followerId, followeeId) {
    if (this.subscribeMap.has(followerId))
      this.subscribeMap.set(followerId, this.subscribeMap.get(followerId).add(followeeId));
    else this.subscribeMap.set(followerId, new Set([followeeId]));
  }

  /**
   * Follower unfollows a followee. If the operation is invalid, it should be a no-op.
   * @param {number} followerId
   * @param {number} followeeId
   * @return {void}
   */
  unfollow(followerId, followeeId) {
    if (this.subscribeMap.has(followerId)) {
      const subscribes = this.subscribeMap.get(followerId);
      if (subscribes.has(followeeId)) {
        subscribes.delete(followeeId);
        this.subscribeMap.set(followerId, subscribes);
      }
    }
  }
}
