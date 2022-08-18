import "./styles.scss";

export const Pagination = ({ handleIncPageQuantity, handleDecPageQuantity, offset }) => {
	return (
		<div className="pagination">
			<div className="pagination__info">
				<input
					readOnly
					className="pagination__info-input"
					type="text"
					name=""
					value=""
					placeholder={offset / 10 + 1}
				/>
				<span className="pagination__info-text"> of 100</span>
			</div>
			<div className="pagination__btns">
				<button
					onClick={handleDecPageQuantity}
					disabled={offset < 1}
					className="pagination__btn"
					type=""
				>
					{"<"}
				</button>
				<button
					onClick={handleIncPageQuantity}
					disabled={offset > 900}
					className="pagination__btn"
					type=""
				>
					{">"}
				</button>
			</div>
		</div>
	);
};
