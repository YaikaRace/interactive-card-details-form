<template>
	<div
		class="w-[375px] flex flex-col justify-center lg:w-full lg:h-full lg:items-center lg:grid lg:grid-cols-5 sm:w-full sm:min-w-full">
		<header-card
			:name="this.name"
			:number="this.number"
			:exp-m="this.expM"
			:exp-y="this.expY"
			:cvc="this.cvc"
			class="lg:col-span-2" />
		<complete-screen
			v-if="this.done"
			class="lg:col-start-4 lg:w-96 lg:min-w-0" />
		<card-form
			v-else
			@name="(v) => (this.name = v ? v : defaultName)"
			@number="(v) => (this.number = v ? v : defaultNumber)"
			@exp-m="(v) => (this.expM = v ? v : defaultExpM)"
			@exp-y="(v) => (this.expY = v ? v : defaultExpY)"
			@cvc="(v) => (this.cvc = v ? v : defaultCvc)"
			@done="this.done = true"
			class="lg:col-start-4 lg:w-96 lg:min-w-0" />
	</div>
	<div class="text-xs text-center lg:absolute lg:bottom-0 lg:left-[50%]">
		Challenge by
		<a
			href="https://www.frontendmentor.io?ref=challenge"
			class="text-red"
			target="_blank"
			>Frontend Mentor</a
		>. Coded by
		<a
			href="https://www.frontendmentor.io/profile/yaikarace"
			class="text-red"
			>Yahir (Yaika Race)</a
		>.
	</div>
</template>

<script>
import cardForm from "./components/cardform.vue";
import headerCard from "./components/header.vue";
import completeScreen from "./components/complete.vue";

export default {
	name: "App",
	data() {
		return {
			name: "jane appleseed",
			number: "0000 0000 0000 0000",
			expM: "00",
			expY: "00",
			cvc: "000",
			defaultName: "jane appleseed",
			defaultNumber: "0000 0000 0000 0000",
			defaultExpM: "00",
			defaultExpY: "00",
			defaultCvc: "000",
			done: false,
		};
	},
	components: {
		cardForm,
		headerCard,
		completeScreen,
	},
};
</script>
