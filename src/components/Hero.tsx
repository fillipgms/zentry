import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import { Button } from "./Button";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import gsap from "gsap";
import { useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
    const getVideoSrc = (index: number) => `videos/hero-${index}.mp4`;
    const [currentVideo, setCurrentVideo] = useState(1);
    const [mainVideo, setMainVideo] = useState(1);
    const [loadedVideos, setLoadedVideos] = useState(0);
    const [isLoading, setIsLoading] = useState(true);
    const [hasClicked, setHasClicked] = useState(false);
    const [isTransitioning, setIsTransitioning] = useState(false);
    const [isCooldown, setIsCooldown] = useState(false);

    const totalVideos = 4;

    const handleLoadVideos = () => {
        setLoadedVideos(loadedVideos + 1);
    };

    const handleClick = async () => {
        if (isCooldown) return;
        setIsCooldown(true);
        setHasClicked(true);

        setCurrentVideo((prevIndex) => (prevIndex % totalVideos) + 1);

        await new Promise((resolve) => setTimeout(resolve, 820));
        setMainVideo((currentVideo % totalVideos) + 1);

        setTimeout(() => {
            setIsCooldown(false);
        }, 820);
    };

    useEffect(() => {
        if (loadedVideos === totalVideos - 2) {
            setIsLoading(false);
        }
    }, [loadedVideos]);

    useGSAP(
        () => {
            if (hasClicked) {
                const timeline = gsap.timeline({
                    onStart: () => setIsTransitioning(true),
                    onComplete: () => setIsTransitioning(false),
                });

                timeline
                    .set("#transition-video", {
                        visibility: "visible",
                        height: "16rem",
                        width: "16rem",
                    })
                    .to("#transition-video", {
                        height: "100%",
                        width: "100%",
                        duration: 0.5,
                        ease: "power4.inOut",
                    })
                    .to("#transition-video", {
                        visibility: "hidden",
                    })
                    .set("#transition-video", {
                        height: "16rem",
                        width: "16rem",
                    });
            }
        },
        {
            dependencies: [currentVideo],
            revertOnUpdate: true,
        }
    );

    useGSAP(() => {
        gsap.set("#video-frame", {
            clipPath: "polygon(14% 0, 72% 0, 88% 90%, 0 95%)",
            borderRadius: "0% 0% 40% 10%",
        });
        gsap.from("#video-frame", {
            clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%) ",
            borderRadius: "0% 0% 0% 0%",
            ease: "power1.inOut",
            scrollTrigger: {
                trigger: "#video-frame",
                start: "center center",
                end: "bottom center",
                scrub: true,
            },
        });
    });

    useGSAP(() => {});

    return (
        <section className="h-screen relative">
            {isLoading && (
                <div className=" size-full flex items-center justify-center absolute z-[100] bg-blue-100">
                    <div className="three-body">
                        <div className="three-body__dot"></div>
                        <div className="three-body__dot"></div>
                        <div className="three-body__dot"></div>
                    </div>
                </div>
            )}
            <div id="video-frame" className=" size-full border border-black">
                <div className="pt-24 px-5 sm:px-10 z-40 absolute top-0 left-0 md:space-y-5">
                    <h1 className="special-font hero-heading text-blue-100">
                        Redefi<b>n</b>e
                    </h1>
                    <p className="max-w-64 font-robert-regular text-blue-100 md:ml-3">
                        Enter the Metagame <br /> Wunleash the Play Economy
                    </p>
                    <Button.Root className="bg-yellow-300 font-bold md:ml-3">
                        <Button.Icon icon={MdOutlineKeyboardDoubleArrowRight} />
                        <Button.Text>Watch Trailer</Button.Text>
                    </Button.Root>
                </div>

                <div>
                    <div
                        id="next-video"
                        className={twMerge(
                            "transition-transform duration-300 ease-out rounded-md border-2 box-border scale-50 opacity-0 hover:scale-100 hover:opacity-100 cursor-pointer absolute absolute-center size-64 overflow-hidden z-40",
                            isTransitioning ? "hidden" : ""
                        )}
                        onClick={handleClick}
                    >
                        diiv
                        <video
                            src={getVideoSrc((currentVideo % totalVideos) + 1)}
                            muted
                            loop
                            onLoadedData={handleLoadVideos}
                            className="absolute absolute-center top-0 left-0 h-screen object-cover object-center"
                        />
                    </div>

                    <div
                        id="transition-video"
                        className="rounded-md absolute invisible absolute-center size-64 overflow-hidden transition-all duration-500 ease-in z-30"
                    >
                        <video
                            src={getVideoSrc(currentVideo)}
                            muted
                            loop
                            onLoadedData={handleLoadVideos}
                            className="absolute w-full absolute-center top-0 left-0 h-screen object-cover object-center "
                        />
                    </div>

                    <video
                        id="main-video"
                        src={getVideoSrc(mainVideo)}
                        muted
                        loop
                        autoPlay
                        onLoadedData={handleLoadVideos}
                        className="absolute top-0 left-0 object-cover object-center size-full z-20"
                    ></video>
                </div>

                <div>
                    <h1 className="absolute bottom-5 right-5 special-font hero-heading text-blue-100 z-[100] ">
                        G<b>a</b>ming
                    </h1>
                </div>
            </div>
            <h1 className="absolute bottom-5 right-5 special-font hero-heading text-black -z-10">
                G<b>a</b>ming
            </h1>
        </section>
    );
};

export default Hero;
