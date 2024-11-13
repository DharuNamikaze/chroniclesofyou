const getStoryData = () => ({
  intro: {
    text: "You enter a dimly lit tavern. A shady figure approaches...",
    choices: [
      { text: "Accept the deal", nextScene: "dealScene", sfx: "/sounds/accept-deal.mp3" },
      { text: "Refuse and leave", nextScene: "leaveScene", sfx: "/sounds/refuse-leave.mp3" },
    ],
    backgroundImage: "/assets/initialscene.jpg"
  },
  dealScene: {
    text: "The figure leads you to a back alley. It's a trap!",
    choices: [
      { text: "Fight the enemies", nextScene: "fightScene", sfx: "/sounds/fight-enemies.mp3" },
      { text: "Run away", nextScene: "runScene", sfx: "/sounds/run-away.mp3" },
    ],
    backgroundImage: "/assets/dealscene.jpg"
  },
  leaveScene: {
    text: "You walk out and find yourself in a dense forest.",
    choices: [
      { text: "Look around", nextScene: "forestScene", sfx: "/sounds/look-around.mp3" },
      { text: "Continue walking", nextScene: "pathScene", sfx: "/sounds/continue-walking.mp3" },
    ],
    backgroundImage: "/assets/leavescene.jpg"
  },
  // More scenes...
});

export default getStoryData;
