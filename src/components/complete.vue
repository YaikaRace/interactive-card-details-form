<template>
	<div
		class="w-11/12 mx-auto flex justify-center flex-col items-center sm:max-w-[750px] sm:w-screen">
		<img
			src="images/icon-complete.svg"
			alt="complete icon"
			class="w-20 mb-8" />
		<div class="flex flex-col items-center">
			<h1 class="tracking-widest text-3xl mb-4">THANK YOU!</h1>
			<p class="tracking-wide text-d-grayish-violet mb-8">
				We've added your card details
			</p>
		</div>
		<form
			action=""
			class="mb-8 w-full">
			<input
				type="submit"
				value="Continue"
				class="submit" />
		</form>
	</div>
</template>

<script>
export default {
	name: "complete-screen",
};
</script>
