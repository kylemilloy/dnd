<template>
  <div class="h-screen flex items-center justify-center">
    <div>
      <p class="text-center mb-4">Exit</p>
      <div class="grid grid-cols-3 grid-rows-3 gap-4 mb-4 justify-between">
        <!--
          Make this a div instead of a button so that pressing "space"
          doesn't trigger a "click" event
        -->
        <div
          v-for="i in max"
          :key="i"
          class="
            text-white text-center
            cursor-pointer
            flex
            items-center
            justify-center
            h-24
          "
          :class="location == section(i) ? 'bg-red-500' : 'bg-indigo-500'"
          @click="setRoom(i)"
        >
          <div>
            <span class="block font-bold text-xl" v-text="section(i)" />
            <input
              v-model="marked[section(i)]"
              type="text"
              class="min-w-0 w-16 mx-6 my-2 text-gray-600"
              @click.stop
              @keyup.stop
              @keydown.stop
            />
          </div>
        </div>
      </div>
      <p class="text-center mt-4 mb-12">Entrance</p>

      <button
        class="
          w-full
          border
          text-center
          block
          bg-indigo-500
          hover:bg-indigo-700
          text-white
          py-2
          mb-4
        "
        type="button"
        @click="shift"
      >
        Shift
      </button>

      <button
        class="w-full border text-center block hover:bg-gray-100 py-2 mb-4"
        type="button"
        @click="undo"
      >
        Undo
      </button>

      <div
        v-if="room"
        class="absolute p-8 max-w-md bg-white border bottom-0 left-0 w-full"
      >
        <span class="block font-bold" v-text="room.name.trim()" />
        <p class="block whitespace-pre-line" v-text="room.description.trim()" />

        <div v-if="room.challenge" class="mt-4">
          <span class="block font-bold">Challenge</span>
          <p v-text="room.challenge.trim()" />
        </div>

        <div v-if="marked[location]" class="mt-4">
          <span class="block font-bold">Notes</span>
          <p v-text="marked[location]" />
        </div>
      </div>

      <div class="absolute top-4 right-4 text-right">
        <ul>
          <li>Current offset</li>
          <li
            v-for="m in mutations"
            :key="m"
            :class="m == mutations[mutation] && 'font-bold text-red-500'"
          >
            {{ m }}
          </li>
        </ul>
      </div>

      <div>
        <label for="room" class="font-bold text-xs">Current room</label>
        <input
          id="room"
          v-model="location"
          type="number"
          class="border py-2 px-3 w-full"
          min="1"
          :max="max"
        />
      </div>
    </div>
  </div>
</template>

<script>
import rooms from '~/content/the-library/rooms'

export default {
  data() {
    return {
      offset: 0,
      max: 9,
      marked: new Array(this.max).map(() => false),
      shifts: [],
      location: 0,
      mutations: [0, 1, 3, 5, 7, 2, 4, 6, 8],
      mutation: 0,
    }
  },
  head: {
    title: "The Librarian's Labyrinth",
  },
  computed: {
    rooms() {
      return rooms
    },
    room() {
      return rooms[this.location - 1]
    },
  },
  methods: {
    shift() {
      this.mutation += 1

      if (this.mutation >= this.mutations.length) {
        this.mutation = 0
      }

      const shift = this.mutations[this.mutation]
      this.shifts.push(shift)
      this.offset = shift
    },

    undo() {
      if (this.shifts.length === 0) {
        return
      }

      this.shifts.pop()
      let offset = this.shifts[this.shifts.length - 1]
      let mutation = this.mutation - 1

      if (mutation < 0) {
        mutation = this.max - 1
      }

      offset = offset || 0

      this.offset = offset
      this.mutation = mutation
    },

    section(index) {
      const input = (index + this.offset) % this.max

      if (input === 0) {
        return this.max
      }
      return input
    },

    setRoom(index) {
      const location = this.section(index)
      if (this.location === location) {
        return (this.location = null)
      }

      this.location = location
    },
  },
}
</script>
