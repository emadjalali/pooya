import Image from "next/image";
import starLine from "@/components/BrandingForPage/section5/pattern5/starline.svg";
import colLines from "@/components/BrandingForPage/section5/pattern5/colLines.svg";
import rowLines from "@/components/BrandingForPage/section5/pattern5/rowLines.svg";
import line from "@/components/BrandingForPage/section5/pattern5/Line.svg";

function HowItWorks() {
	const Pstyle = {
		textAlign: "center",
		marginTop: "50px",
	};
	return (
		<>
			<div
				style={{
					textAlign: "center",
					fontSize: "30px",
					marginTop: "120px",
				}}>
				<h1 style={{ fontSize: "50px" }}>How It Works?</h1>
				<p>(The Process)</p>
			</div>
			<Image
				src={starLine}
				style={{
					width: "80px",
					position: "absolute",
					right: "33%",
					marginTop: "-8%",
				}}
			/>
			<div
				style={{
					color: "orange",
					fontSize: "22px",
					position: "absolute",
					right: "39%",
				}}>
				<p style={Pstyle}>
					You have business dream and be- <br /> lieve in yourself.
				</p>
				<p style={Pstyle}>
					You send request here (or on the <br /> desired service’s page)
				</p>
				<div>
					<pre style={Pstyle}>
						We send you an email giving more
						<br />
						information/scheduling a free
						<br />
						online meeting.
					</pre>
					<Image
						src={colLines}
						style={{
							width: "550px",
							position: "absolute",
							left: "-590px",
							top: "25%",
						}}
					/>
				</div>
				<p style={Pstyle}>We get to know each other more</p>
				<div>
					<pre style={Pstyle}>
						Your need(s) are discovered and
						<br />
						evaluated during and after the
						<br />
						meeting
					</pre>
					<p style={Pstyle}>You receive a tailored proposal</p>
					<p style={Pstyle}>
						You have business dream and be- <br />
						lieve in yourself.
					</p>
					<p style={Pstyle}>
						We may work in many forms and
						<br />
						turn to friends in many forms
					</p>
					<Image
						src={line}
						style={{
							width: "400px",
							position: "absolute",
							right: "-590px",
							top: "55%",
						}}
					/>
				</div>
				<div>
					<p style={Pstyle}>
						We both step into becoming the
						<br />
						best version of ourselves in busi-
						<br />
						ness and the life as well
					</p>
					<Image
						src={rowLines}
						style={{
							width: "45px",
							position: "absolute",
							left: "44%",
							marginTop: "40px",
							paddingBottom: "20px",
						}}
					/>
				</div>
			</div>
		</>
	);
}

export default HowItWorks;
