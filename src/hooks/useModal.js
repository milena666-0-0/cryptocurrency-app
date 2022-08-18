import { useState, useCallback } from "react";

export const useModal = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [value, setValue] = useState();

	const handleChangeModalOpen = useCallback(() => {
		setIsOpen((isOpen) => !isOpen);
		document.body.style.overflow = "hidden";
		document.body.style.paddingRight = "17px";
	}, []);

	const handleCloseModal = useCallback(() => {
		setIsOpen(false);
		setValue("");
		document.body.style.overflow = "auto";
		document.body.style.paddingRight = 0;
	}, []);

	const onChange = (e) => {
		const targetVal = e.target.value;

		const rx1 = /^[0-9]*\.?[0-9]*$/;
		const rx2 = /^[A-Za-z]*$/;

		if (rx1.test(targetVal) || targetVal === "") {
			setValue(e.target.value);
		} else if (rx2.test(targetVal)) {
			setValue("");
		}
	};

	return {
		isOpen,
		value,
		handleChangeModalOpen,
		handleCloseModal,
		onChange,
	};
};
