"use client";

import { EmblaCarouselType } from "embla-carousel";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import React, { useCallback } from "react";
import {
  NextButton,
  PrevButton,
  usePrevNextButtons,
} from "./EmblaCarouselArrowButtons";

type PropType = {
  children?: React.ReactNode;
  autoplay?: boolean; // Add autoplay prop
};

const EmblaCarousel: React.FC<PropType> = ({ children, autoplay = false }) => {
  // Initialize EmblaCarousel with or without autoplay
  const plugins = autoplay ? [Autoplay()] : [];
  const [emblaRef, emblaApi] = useEmblaCarousel({}, plugins);

  const onNavButtonClick = useCallback((emblaApi: EmblaCarouselType) => {
    const autoplayPlugin = emblaApi?.plugins()?.autoplay;
    if (!autoplayPlugin) return;

    const resetOrStop =
      autoplayPlugin.options.stopOnInteraction === false
        ? autoplayPlugin.reset
        : autoplayPlugin.stop;

    resetOrStop();
  }, []);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi, onNavButtonClick);

  return (
    <section className="w-full m-auto relative group">
      <div className="overflow-hidden" ref={emblaRef}>
        <div
          className="flex gap-4 touch-pan-y touch-pinch-zoom mx-2"
          style={{
            WebkitBackfaceVisibility: "hidden",
            backfaceVisibility: "hidden",
            MozBackfaceVisibility: "hidden",
          }}
        >
          {children}
        </div>
      </div>

      <div className="flex items-center justify-center absolute top-0 bottom-0 sm:-left-4 left-2">
        <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
      </div>
      <div className="flex items-center justify-center absolute top-0 bottom-0 sm:-right-4 right-2">
        <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
      </div>
    </section>
  );
};

export default EmblaCarousel;
