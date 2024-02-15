export default function SectionFour() {
	return (
		<div
			className='pageSize'
			style={
				{
					// position: "relative",
					// width: "100%",
					// paddingTop: "56%",
					// margin: "auto",
				}
			}>
			<div
				style={{
					position: "absolute",
					top: "0%",
					width: "75%",
					margin: "auto",
					left: "50%",
					transform: "translate(-50%)",
					opacity: 0,
				}}></div>
			<style jsx>{`
				.pageSize {
					position: relative;
					width: 100%;
					padding-top: 199%;
					margin: auto;

					background-image: url(Phone-17.svg);
					background-size: cover;
				}

				@media screen and (min-width: 768px) {
					.pageSize {
						padding-top: 56%;
						background-image: url(section4b.jpg);
						background-size: cover;
					}
				}
			`}</style>
		</div>
	);
}
