const getStoryData = () => ({
  intro: {
    text: "You enter a dimly lit tavern. A shady figure approaches...",
    choices: [
      { text: "Accept the deal", nextScene: "dealScene", sfx: "/sfx/acceptdeal.mp3" },
      { text: "Refuse and leave", nextScene: "leaveScene", sfx: "/sfx/refuseleave.mp3" },
    ],
    backgroundImage: "/assets/initialscene.jpg"
  },
  dealScene: {
    text: "The figure leads you to a back alley. It's a trap!",
    choices: [
      { text: "Fight the enemies", nextScene: "fightScene", sfx: "/sfx/refuseleave.mp3" },
      { text: "Run away", nextScene: "runScene", sfx: "/sfx/refuseleave.mp3" },
    ],
    backgroundImage: "/assets/dealscene.jpg"
  },
  leaveScene: {
    text: "You walk out and find yourself in a dense forest.",
    choices: [
      { text: "Look around", nextScene: "forestScene", sfx: "/sfx/refuseleave.mp3" },
      { text: "Continue walking", nextScene: "pathScene", sfx: "/sfx/refuseleave.mp3" },
    ],
    backgroundImage: "/assets/leavescene.jpg"
  },
  // More scenes...
});

export default getStoryData;
