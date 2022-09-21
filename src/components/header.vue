<template>
	<header
		class="bg-bg-mobile lg:bg-bg-desktop bg-no-repeat w-full h-60 lg:h-full mb-16 lg:mb-0 whitespace-nowrap sm:bg-cover sm:w-full sm:max-w-[750px] mx-auto">
		<div
			class="card-images w-11/12 h-full mx-auto flex items-center justify-end relative lg:w-full sm:justify-start">
			<img
				src="images/bg-card-back.png"
				alt="Credit card"
				class="w-9/12 lg:absolute lg:bottom-32 lg:w-[435px] lg:left-60 sm:w-64 sm:right-32 sm:absolute" />
			<span
				class="absolute text-white text-xs mr-8 lg:mr-0 lg:text-base lg:right-auto lg:left-[37rem] lg:bottom-[14.8rem] sm:right-40 sm:mr-0">
				{{ cvc }}
			</span>
			<img
				src="images/bg-card-front.png"
				alt="Credit card"
				class="w-9/12 absolute left-0 -bottom-7 lg:w-[435px] lg:left-40 lg:bottom-auto lg:top-32 sm:w-64 sm:left-32" />
			<img
				src="images/card-logo.svg"
				alt="card logo"
				class="absolute left-4 bottom-16 w-14 lg:left-44 lg:top-36 lg:w-20 sm:left-36" />
			<span
				class="absolute left-5 bottom-2 text-white tracking-widest lg:top-64 lg:bottom-auto lg:text-3xl lg:left-[11.2rem] lg:right-auto sm:left-[9.5rem]">
				{{ number }}
			</span>
			<span
				class="uppercase absolute text-white left-5 -bottom-3 text-[0.5rem] lg:bottom-auto lg:top-80 lg:left-[11.2rem] lg:text-base sm:left-[9.5rem]">
				{{ name }}
			</span>
			<span
				class="absolute text-white text-[0.5rem] right-28 -bottom-3 lg:bottom-auto lg:right-auto lg:left-[32.3rem] lg:top-80 lg:text-base sm:left-[21rem]">
				{{ expM }}/{{ expY }}
			</span>
		</div>
	</header>
</template>

<script>
export default {
	name: "card-header",
	props: {
		name: {
			default: "jane appleseed",
			type: String,
		},
		number: {
			default: "0000 0000 0000 0000",
			type: String,
		},
		"exp-m": {
			default: "00",
			type: String,
		},
		"exp-y": {
			default: "00",
			type: String,
		},
		cvc: {
			default: "000",
			type: String,
		},
	},
};
</script>
