<template>
	<div class="payform text-v-d-violet">
		<form
			action=""
			@submit.prevent="validateForm()"
			class="grid grid-cols-4 grid-rows-[7] gap-2 w-11/12 mx-auto sm:max-w-[750px]">
			<label
				class="col-span-4 text-xs tracking-wider"
				for="cardholder"
				>CARDHOLDER NAME</label
			>
			<input
				type="text"
				id="cardholder"
				maxlength="30"
				@input="createEvent('name', $event.target.value)"
				placeholder="e.g. Jane Appleseed"
				ref="name"
				:class="{ error: nameError }"
				class="input-fields col-span-4 tracking-wide" />
			<span
				class="col-span-4 text-xs text-red"
				v-if="nameError"
				>Can't be blank</span
			>
			<label
				class="col-span-4 text-xs tracking-wider"
				for="card-number"
				>CARD NUMBER</label
			>
			<input
				type="tel"
				id="card-number"
				placeholder="e.g. 1234 5678 9123 0000"
				maxlength="19"
				v-model="cardNumber"
				@input="createEvent('number', $event.target.value), formatCard()"
				ref="input"
				:class="{ error: numberError, error: blankNumber }"
				class="input-fields col-span-4 tracking-wide" />
			<span
				class="col-span-4 text-xs text-red"
				v-if="blankNumber"
				>Can't be blank</span
			>
			<span
				class="col-span-4 text-xs text-red"
				v-else-if="numberError"
				>Wrong format or invalid card</span
			>
			<label
				class="col-span-2 text-xs tracking-wider"
				for="exp-date"
				>EXP. DATE (MM/YY)</label
			>
			<label
				class="col-span-2 text-xs tracking-wider"
				for="cvc"
				>CVC</label
			>
			<input
				type="tel"
				max="12"
				maxlength="2"
				id="exp-date"
				placeholder="MM"
				ref="expM"
				@input="createEvent('exp-m', $event.target.value)"
				:class="{ error: dateError, error: expError }"
				class="input-fields col-span-1 tracking-wide" />
			<input
				type="tel"
				max="3000"
				maxlength="4"
				id="exp-date"
				placeholder="YY"
				ref="expY"
				@input="createEvent('exp-y', $event.target.value)"
				:class="{ error: dateError, error: expError }"
				class="input-fields col-span-1 tracking-wide" />
			<input
				type="tel"
				maxlength="4"
				max="9999"
				id="cvc"
				ref="cvc"
				placeholder="e.g. 123"
				@input="createEvent('cvc', $event.target.value), formatCard()"
				:class="{ error: cvcError }"
				class="input-fields col-span-2 tracking-wide" />
			<span
				class="col-span-2 text-xs text-red"
				v-if="dateError"
				>Can't be blank</span
			>
			<span
				class="col-span-2 text-xs text-red"
				v-else-if="expError"
				>credit card expired or the date is invalid</span
			>
			<span
				class="col-span-2 text-xs text-red col-start-3"
				v-if="cvcError"
				>Can't be blank</span
			>
			<input
				type="submit"
				value="Confirm"
				class="submit col-span-4" />
		</form>
	</div>
</template>

<script>
import payform from "payform";

export default {
	name: "card-form",
	data() {
		return {
			cardNumber: null,
			nameError: false,
			numberError: false,
			blankNumber: false,
			dateError: false,
			expError: false,
			cvcError: false,
		};
	},
	methods: {
		validateForm() {
			payform.validateCardNumber(this.cardNumber)
				? (this.numberError = false)
				: (this.numberError = true);
			payform.validateCardCVC(this.$refs.cvc.value)
				? (this.cvcError = false)
				: (this.cvcError = true);
			payform.validateCardExpiry(this.$refs.expM.value, this.$refs.expY.value)
				? (this.expError = false)
				: (this.expError = true);
			this.$refs.expM.value
				? (this.dateError = false)
				: (this.dateError = true);
			this.$refs.expY.value
				? (this.dateError = false)
				: (this.dateError = true);
			this.$refs.name.value
				? (this.nameError = false)
				: (this.nameError = true);
			this.$refs.input.value
				? (this.blankNumber = false)
				: (this.blankNumber = true);
			if (
				!this.numberError &&
				!this.cvcError &&
				!this.expError &&
				!this.dateError &&
				!this.nameError &&
				!this.blankNumber
			) {
				this.$emit("done", true);
			}
		},
		formatCard() {
			if (this.cardNumber.length > 17) {
				payform.detachCardNumberInput(this.$refs.input);
				payform.detachCvcInput(this.$refs.cvc);
			} else {
				payform.cardNumberInput(this.$refs.input);
				payform.cvcInput(this.$refs.cvc);
			}
		},
		createEvent(event, value) {
			this.$emit(event, value);
		},
	},
};
</script>
