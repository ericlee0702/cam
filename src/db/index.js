export const db = {
  banner: {
    content1:
      "The game of cat and mouse is afoot! In the rural backwaters of the metaverse lies a sprawling country ranch. Inside lives the Crazy Cat Lady, a mysterious old woman with an enormous appetite for finely aged <span class='orange-txt'>$CHEDDAR</span>.",
    content2:
      "But the walls of her home hold a terrible secret -- the largest family of mice this side of the Mississippi! The mice sustain their numbers by leaving the safety of the walls to forage for <span class='orange-txt'>$CHEDDAR</span>. And when mice have enough food and a place to live... well let’s just say they can make a lot more mice. ",
    content3:
      "But the Crazy Cat Lady’s cheese hoard isn’t undefended! To be a Crazy Cat Lady you need a lot of cats and they make really grate cheddar guardians. Whenever the mice grab more than they can carry, the cats are ready to snatch back whatever gets dropped. And if the little mice thieves aren’t careful enough they’ll be killed as they try to return home.",
  },
  minting: {
    title: "Minting:",
    content1:
      "The initial ethereum mint consists of 10,000  NFTs, with 90% Mice and 10% Cats. After the initial mint an additional 40,000 will be minted using the game token <span class='orange-txt'>$CHEDDAR</span>, at the rate of 90% Mice, 8% Cats, 2% Crazy Cat Ladies.",
    content2:
      "There is a second set of real estate NFTs consisting of three house types: Shack, Ranch, and Mansion. There are 10000 of these that can be minted only using <span class='orange-txt'>$CHEDDAR</span> at the rate of 70% Shack, 25% Ranch, and 5% Mansion.",
    tableSection1: {
      header: "CHARACTERS:",
      items: [
        {
          range: "0-10000",
          value: ".075eth",
        },
        {
          range: "10001-20000",
          value: "20000",
        },
        {
          range: "20001-40000",
          value: "40000",
        },
        {
          range: "40001-50000",
          value: "80000",
        },
      ],
    },
    tableSection2: {
      header: "REAL ESTATE:",
      items: [
        {
          range: "0-2500",
          value: "80000",
        },
        {
          range: "2501-7500",
          value: "160000",
        },
        {
          range: "7501-10000",
          value: "320000",
        },
      ],
    },
  },
  cheddar: {
    title: "$CHEDDAR:",
    content1:
      "<span class='orange-txt'>$CHEDDAR</span>, an ERC-20 token, is the driving force behind the game of Cat & Mouse. It is earned through staking your NFTs and can be spent to mint new characters and new real estate. ",
    content2: "The max supply of <span class='orange-txt'>$CHEDDAR</span> is 6,000,000,000",
  },
  mouse: {
    title: "Mouse:",
    content1Title: "Forage (Stake)",
    content1:
      "Your mouse leaves the nest to forage for food, generating 10,000 <span class='orange-txt'>$CHEDDAR</span> per day. You can only unstake after generating 20,000 <span class='orange-txt'>$CHEDDAR</span>",
    content2Title: "Drop Off (Claim)",
    content2_1:
      "Receive your accumulated <span class='orange-txt'>$CHEDDAR</span> as your mouse hands off its haul at the nest. Each foraging location provides a different level of safety against the cats. Odds to have <span class='orange-txt'>$CHEDDAR</span> stolen per location:",
    content2_2: "(Percent chance to lose a percent of tokens)",
    small_content2_1: "Trashcan:  (50% * 60%)",
    content2_3:
      "E.g. If you have accumulated 10000 <span class='orange-txt'>$CHEDDAR</span>, you will have a 50% chance to lose 6000<span class='orange-txt'>$CHEDDAR</span> when you claim",
    small_content2_2: "Cupboard: (80%*25%)",
    small_content2_3: "Pantry:  (25%*40%)",
    small_content2_4: "Vault: (20%*25%)",
    content3Title: "Return to Nest (Unstake)",
    content3_1:
      "Your mouse runs to the nest carrying his bounty with the cats on his heels. This action comes with two possible outcomes:",
    content3_2:
      "a.	Your mouse evades capture and returns to your possession. The cats snatch up a percentage of its accumulated tokens depending on its foraging location.",
    content3_3:
      "b.	Your mouse is caught and killed! You lose your NFT, but due to the valiant efforts of your mouse, you receive 100% of its accumulated <span class='orange-txt'>$CHEDDAR</span>. The NFT is burned and removed from the total supply",
    content3_4: "Chance to lose mouse:",
    small_content3_1: "Trashcan: 30%",
    small_content3_2: "Cupboard: 20%",
    small_content3_3: "Pantry: 10%",
    small_content3_4: "Vault: 5%",
    content4Title: "Scurry (Roll)",
    content4_1:
      "Pay 3000 <span class='orange-txt'>$CHEDDAR</span> to roll for a new location for your mouse to forage in. Each location provides varying odds of losing your <span class='orange-txt'>$CHEDDAR</span> to the cats when claiming and losing your mouse when unstaking! Every staked mouse forages in the Trashcan by default before scurrying.",
    content4_2: "Roll Price - 3000 tokens",
    tableBody: [
      {
        val1: "Odds to Roll",
        val2: "Default",
        val3: "70%",
        val4: "20%",
        val5: "10%",
      },
      {
        val1: "Claim Risk",
        val2: "50% chance to lose 60% of tokens",
        val3: "80% chance to lose 25% of tokens",
        val4: "25% chance to lose 40% of tokens",
        val5: "20% chance to lose 25% of tokens",
      },
      {
        val1: "Unstake Risk",
        val2: "30% chance to lose your mouse",
        val3: "20% chance to lose your mouse",
        val4: "10% chance to lose your mouse",
        val5: "5% chance to lose your mouse",
      },
    ],
  },
  cat: {
    title: "Cat:",
    description:
      "Every cat is created equal! Cats are able to roam as they please and have no risks associated with their actions!",
    content1Title: "Prowl (Stake)",
    content1:
      "Your cat goes on the prowl to try to protect the Crazy Cat Lady’s cheese. It stalks the mice and every time they claim <span class='orange-txt'>$CHEDDAR</span>, a percentage of it is snatched up and distributed evenly between the cats.",
    content2Title: "Amber Alert (Steal)",
    content2:
      "While staked, Cats are on high alert and gain a 10% chance to snatch away new Character mints before they make it to their proper owners.",
    content3Title: "Drop off (Claim)",
    content3:
      "Receive your accumulated <span class='orange-txt'>$CHEDDAR</span> as your cat places the recovered cheese back in the cupboard",
    content4Title: "Cat Nap (Unstake)",
    content4:
      "Your cat returns to you and you receive its accumulated <span class='orange-txt'>$CHEDDAR</span>.",
  },
  estate: {
    title: "Real Estate:",
    description:
      "Pay tokens to mint a randomly assigned house. Take advantage of the games happening inside each house to generate <span class='orange-txt'>$CHEDDAR</span> every day! Investing in real estate is the safest way to play the game. Real Estate is also a great long-term investment as the houses purchased here in Phase 1 will have continued importance down the line in future phases of the game.",
    tableSection1: {
      header: "MINT PRICE IN $CHEDDAR:",
      items: [
        {
          range: "0-2500",
          value: "80000",
        },
        {
          range: "2501-7500",
          value: "160000",
        },
        {
          range: "7501-10000",
          value: "3200000",
        },
      ],
    },
    content1Title: "Each House has three available actions:",
    content2Title: "Move in (Stake)",
    content2:
      "Welcome to your beautiful new home! While your house is staked it will generate <span class='orange-txt'>$CHEDDAR</span> every day.",
    content3Title: "Empty the Pantry (Claim)",
    content3:
      "Receive the accumulated <span class='orange-txt'>$CHEDDAR</span>. The Crazy Cat Ladies are evenly distributed 10% off the top as rent",
    content4Title: "Move Out (Unstake)",
    content4:
      "Return the house to your wallet and receive its accumulated <span class='orange-txt'>$CHEDDAR</span>",
    tableSection2_1: {
      header: "ODDS TO MINT EACH HOUSE:",
      items: [
        {
          range: "Shack",
          value: "70%",
        },
        {
          range: "Ranch",
          value: "25%",
        },
        {
          range: "Mansion",
          value: "5%",
        },
      ],
    },
    tableSection2_2: {
      header: "TOKEN GENERATION:",
      items: [
        {
          range: "Shack",
          value: "17,850",
        },
        {
          range: "Ranch",
          value: "30,000",
        },
        {
          range: "Mansion",
          value: "100,000",
        },
      ],
    },
  },
  catLady: {
    title: "Crazy Cat Lady:",
    description:
      "Crazy Cat Ladies are the queens of the estate and have no risks associated with their actions!",
    content1Title: "Landlady (Stake)",
    content1: "Accumulate 10% rent on all <span class='orange-txt'>$CHEDDAR</span> claimed from houses",
    content2Title: "Outbid (Steal)",
    content2:
      "While staked, Crazy Cat Ladies use their wily negotiating skills to outbid the opposition and steal 8% of new Real Estate mints",
    content3Title:"Collect rent (Claim)",
    content3:"Receive your accumulated <span class='orange-txt'>$CHEDDAR</span>",
    content4Title:"Armchair Nap (Unstake)",
    content4:"The Crazy Cat Lady returns to you and you receive her accumulated <span class='orange-txt'>$CHEDDAR</span>."
  },
};
