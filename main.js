const videoUrl = "https://fletch.ooo/portfolio/apple_spec_no8u5dFSdsss23.mp4";

(async () => {
	const videoElement = document.getElementById("ad-video");
	const sourceElement = videoElement.querySelector("source");

	sourceElement.src = videoUrl;
	videoElement.load();

	videoElement.oncanplay = () => {
		gsap.to(videoElement, {
			opacity: 1,
			duration: 1,
			ease: "power3.out",
			onComplete: () => {
				videoElement.loop = true;
				videoElement.play();
			},
		});
	};
})();
