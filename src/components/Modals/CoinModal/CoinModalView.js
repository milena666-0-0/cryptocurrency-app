import { roundNumb } from "../../../utils/index";

import "./styles.scss";

export const CoinModalView = ({
	value,
	coinData,
	onChange,
	handleCloseModal,
	handleAddCoinToPortfolio,
}) => {
	const dataToAddToPortfolio = { ...coinData, quantity: +value };
	const total = dataToAddToPortfolio.priceUsd * dataToAddToPortfolio.quantity;

	return (
		<div onClick={handleCloseModal} className="modal">
			<div
				onClick={(e) => e.stopPropagation()}
				className="modal__content"
			>
				<p className="modal__title">Add coin to your portfolio</p>
				<p className="modal__coin-name">
					{dataToAddToPortfolio.name} ({dataToAddToPortfolio.symbol})
				</p>
				<input
					value={value}
					onChange={onChange}
					className="modal__input"
					type="text"
					name=""
					placeholder="Enter quantity"
				/>
				<p className="modal__coin-total">
					Total: ${total ? roundNumb(total, 3) : 0}
				</p>
				<button
					onClick={() => {
						if (Boolean(value) === false || value === "") return;
						handleAddCoinToPortfolio(dataToAddToPortfolio);
						handleCloseModal();
					}}
					className="modal__btn"
					disabled={Boolean(value) === false || value === ""}
					type=""
				>
					Submit
				</button>
				<div onClick={handleCloseModal} className="modal__close-btn">
					x
				</div>
			</div>
		</div>
	);
};
