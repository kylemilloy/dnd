export default [
  {
    name: 'Room 1',
    description: `
      At the centre of this room stands a metal statue, tarnished almost completely black with age, depicting a woman in a robe looking through a telescope.

      The woman always points towards the exit, track the location of the room to ensure you keep this in mind. With a DC8 Survival the players can ascertain north/east/west/south
      but if they fail then the maze has them too disoriented. When all players enter the room and the room shifts read:

      As the doors close the room shakes and as this happens, the statue turns (clockwise/anti-clockwise direction and degrees towards the exit from the shuffle)
    `,
    challenge: null,
  },
  {
    name: 'Room 2',
    description: `
      The scent of death hits your nostrils immediately as the door opens to this room. Inside you can see a collection of refuse and detritus littering the floor.
      The partially dissolved bones of several creatures, large and small, litter the floor. Some larger ones, almost unmistakably human, are here too but dissolved to a degree to be
      almost unrecognizable.
    `,
    challenge: `
      There is a carrion crawler hiding in this room and will sneak attack the players if they don't search the room or have a passive perception of 16 or higher.
      With a passive perception, hint that they may not be alone ("You feel hairs on the back of your neck rise, it feels like someone (or something) is watching you") but let them play it out.
      The creature strikes from the ceiling.
    `,
  },
  {
    name: 'Room 3',
    description: `
      The door opens revealing a room covered in thick cobwebs from ceiling to floor. Unlike the other rooms, the floor in this one is metal instead of stone; worn dull and heavily pitted.
    `,
    challenge: `
      There is a 10' trap door in the middle of this room that contains a giant spider.
      When one character gets close the trap door opens, they fall 20' and it springs closed and locks behind them, separating them from the group.
      The player who fell takes 2d6 bludgeoning damage from the fall, half on a DC12 Dexterity save (or acrobatics if they have proficiency)
      To open the trap door the party needs to roll a DC20 Strength check to force it open and break the mechanism.
    `,
  },
  {
    name: 'Room 4',
    description: `
      In the centre of this room atop a small pedistal is some kind of Builder device. It is a thin, dull silver rod affixed to the ground. Atop it is a red circluar button.
      As you enter the room and step across the threshold, you hear a click. The door behind you shuts and from a metal vent in the ceiling you see a thick white cloud of gas begin to fill the room.
    `,
    challenge: `
      This is a disinfecting room and requires a hazmat suit to be in safely. Give the players a bit of time to try stuff out but shortly every round they will start taking 1 poison damage.
      When the players hit the button it starts a countdown from 10. Describe it as, "You press the button and across the room the wall lights up.
      You see Builder runes light up on the wall across from you.
      Get a DC8 INT check from anyone, on success (which hopefully you get at least one success) you tell the players that these are builder numbers and this appears to be a countdown.
      30, 29, 28...the trick is the players have to let the countdown hit 0. Everytime they press the button, the timer restarts.
    `,
  },
  {
    name: 'Room 5',
    description: `
      The doors open revealing a room much like the last, 30 feet by 30 feet, smooth builder stone walls and an identical floor.
      On the wall of this room is a yellow, triangular sign with a black border depicting a skull and cross bones. Under the drawing is some sort of rune or word written in Builder script.

      If someone translates the sign (Int DC 15) they know it to be Builder for "Danger"
    `,
    challenge: null,
  },
  {
    name: 'Room 6',
    description: `
      The door opens onto a room that looks to be in immaculate condition. The stone here is polished smooth and the dust that covers the other rooms you've seen is non-existent here.
    `,
    challenge: `
      There is a gelatenous cube in this room. Players who enter the room will walk straight into the cube. Players with a passive perception of 15 or higher are given a hint that something else
      is amiss in this room, "You hesitate as you begin to enter the room, you notice a slight shimmer to the room in front of you, a reflection of light where there shouldn't be one. Something's not right."
      Let the players handle that however they like but after roughly one turn the cube will lash out at them and lose it's sneak attack if they don't move into the room.
    `,
  },
  {
    name: 'Room 7',
    description: `
      The doors open revealing a room much like the last, 30 feet by 30 feet, smooth builder stone walls and an identical floor.
      In this room are a number of metal barrels stacked against one side the room. A yellow builder symbol is drawn on each barrel. The symbol is a central dot with three square-like pieces wrapped around it.
      If the players ask for a drawing, it's a radiation symbol.
    `,
    challenge: null,
  },
  {
    name: 'Room 8',
    description: `
      The smooth metal door slides open before you via an unseen Builder mechanism and disappears into the wall revealing a rather unremarkable 30-by-30 room.

      Three other doors, identical to the one that just opened, are situated on each wall.

      A thin layer of dust covers the smooth floor tiles but in places looks to have been disturbed; as if something has been dragged through it from doorway to doorway.
    `,
    challenge: null,
  },
  {
    name: 'Room 9',
    description: `
      The doors open revealing a room much like the last, 30 feet by 30 feet, smooth builder stone walls and an identical floor.

    `,
    challenge: null,
  },
]
