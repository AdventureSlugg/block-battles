import { context, reddit } from '@devvit/web/server';

export const createPost = async (team1?: string, team2?: string) => {
  const { subredditName } = context;
  if (!subredditName) {
    throw new Error('subredditName is required');
  }

  return await reddit.submitCustomPost({
    splash: {
      // Splash Screen Configuration
      appDisplayName: `Block Battles: ${team1} vs ${team2}!`,
      backgroundUri: 'default-splash.png',
      buttonLabel: 'Tap to start',
      description: `Epic showdown between ${team1} and ${team2}`,
      entryUri: 'index.html',
      heading: 'Destroy the other subreddit',
      appIconUri: 'default-icon.png'
    },
    postData: {
      gameState: 'initial',
      score: 0,
    },
    subredditName: subredditName,
    title: `Block Battles: ${team1} vs ${team2}!`,
  });
};
