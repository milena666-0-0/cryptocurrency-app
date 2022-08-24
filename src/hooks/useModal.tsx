import { useState, useCallback, FormEvent } from "react";

interface IUseModal {
	isOpen: boolean;
	value: string;
	handleChangeModalOpen: () => void;
	handleCloseModal: () => void;
	onChange?: (e: FormEvent<HTMLInputElement>) => void;
}

export const useModal = (): IUseModal => {

	const [isOpen, setIsOpen] = useState<boolean>(false);
	const [value, setValue] = useState<string>('');

	const handleChangeModalOpen = useCallback(() => {
		setIsOpen((isOpen: boolean) => !isOpen);

		document.body.style.overflow = "hidden";
		document.body.style.paddingRight = "17px";
	}, []);

	const handleCloseModal = useCallback(() => {

		setIsOpen(false);
		setValue("");

		document.body.style.overflow = "auto";
		document.body.style.paddingRight = 0;
	}, []);

	const onChange = (e: FormEvent<HTMLInputElement>) => {
		const targetVal = e.currentTarget.value;

		const rx1 = /^[0-9]*\.?[0-9]*$/;
		const rx2 = /^[A-Za-z]*$/;

		if (rx1.test(targetVal) || targetVal === "") {
			setValue(targetVal);

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
