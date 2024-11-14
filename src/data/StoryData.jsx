const getStoryData = () => ({
  intro: {
    text: "You’re sitting on a crowded bus, heading toward the station with a sense of excitement and nerves about starting college.--a stranger sitting two seats behind you takes a blink of you.",
    choices: [
      { text: "Notice her", nextScene: "noticescene", sfx: "/sfx/sparkle1.mp3" },
      { text: "Nevermind", nextScene: "ignorescene", sfx: "/sfx/refuse1.mp3" },
    ],
    backgroundImage: "/assets/introscene.jpg"
  }, 
  // writing nextscene in the above choice leads you to this choice below
  noticescene: {
    text: "You have travelled all the way from your hometown to a new city to join college, you recognize the girl in the college and the stranger who was at the bus...",
    choices: [
      { text: "Try to Talk", nextScene: "tryingToTalk", sfx: "/sfx/tryingToTalk.mp3" },
      { text: "Nevermind", nextScene: "neverMindAgain", sfx: "/sfx/neverMindAgain2.mp3" },
    ],
    backgroundImage: "/assets/introscene.jpg"
  },
  // this scene contiues when you click the 2nd option during the intro
  ignorescene: {
    text: "You walk out and find the boys dormi n a dense forest.",
    choices: [
      { text: "Look around", nextScene: "forestScene", sfx: "/sfx/refuseleave.mp3" },
      { text: "Continue walking", nextScene: "pathScene", sfx: "/sfx/refuseleave.mp3" },
    ],
   backgroundImage: "/assets/introscene.jpg"
  },
  // More scenes...
  tryingToTalk: {
    text: "You walk out and find yourself in a dense forest.",
    choices: [
      { text: "Look around", nextScene: "forestScene", sfx: "/sfx/refuseleave.mp3" },
      { text: "Continue walking", nextScene: "pathScene", sfx: "/sfx/refuseleave.mp3" },
    ],
   backgroundImage: "/assets/introscene.jpg"
  },
  // More scenes...
  neverMindAgain: {
    text: "You walk out and find yourself in a dense forest.",
    choices: [
      { text: "Look around", nextScene: "forestScene", sfx: "/sfx/refuseleave.mp3" },
      { text: "Continue walking", nextScene: "pathScene", sfx: "/sfx/refuseleave.mp3" },
    ],
   backgroundImage: "/assets/introscene.jpg"
  },
});

export default getStoryData;
