<template>
	<div class="items-center text-center">
		<h1 class="text-xl text-gray-700">Demo Tomato Timer</h1>
		<div class="flex flex-row justify-center">
			<div class="text-5xl text-gray-700 py-4 font-bold">{{ minutes }}</div>
			<div class="text-5xl text-gray-700 py-4 font-bold">:</div>
			<div class="text-5xl text-gray-700 py-4 font-bold">{{ seconds }}</div>
		</div>
		<div class="my-4">
			<button class="w-40 py-2 px-8 bg-white rounded text-blue-500 mx-2 border border-blue-500 hover:text-white hover:bg-blue-500" v-if="!timer" @click="startTimer">Start</button>
		</div>
		<div class="my-4">
			<button class="w-40 py-2 px-8 bg-white rounded text-red-500 mx-2 border border-red-500 hover:text-white hover:bg-red-500" v-if="timer" @click="stopTimer">Stop</button>
		</div>
		<div class="my-6">
			<button class="w-40 py-2 px-8 bg-white rounded text-green-500 mx-2 border border-green-500 hover:text-white hover:bg-green-500" v-if="resetButton" @click="resetTimer">Reset</button>
		</div>
	</div>
</template>

<script>
	export default{
		data() {
			return {
				timer: null,
				totalTime: (25 * 60),
			    resetButton: false
			}
		},
		computed: {
		    minutes: function() {
		      const minutes = Math.floor(this.totalTime / 60);
		      return this.padTime(minutes);
		    },
		    seconds: function() {
		      const seconds = this.totalTime - (this.minutes * 60);
		      return this.padTime(seconds);
		    }
		},
		methods: {
		    startTimer: function() {
		      this.timer = setInterval(() => this.countdown(), 1000);
		      this.resetButton = true;
		    },
		    stopTimer: function() {
		      clearInterval(this.timer);
		      this.timer = null;
		      this.resetButton = true;
		    },
		    resetTimer: function() {
		      this.totalTime = (25 * 60);
		      clearInterval(this.timer);
		      this.timer = null;
		      this.resetButton = false;
		    },
		    padTime: function(time) {
		      return (time < 10 ? '0' : '') + time;
		    },
		    countdown: function() {
		      if(this.totalTime >= 1){
		        this.totalTime--;
		      } else{
		        this.totalTime = 0;
		        this.resetTimer()
		      }
		    }
		}
	}
</script>