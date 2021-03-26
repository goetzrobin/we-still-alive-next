import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';
import { Children, PropsWithChildren, useState } from 'react';
import styles from './wkeenslider.module.css';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';

const WKeenSlider = ({
  className,
  children,
}: PropsWithChildren<{ className?: string }>): React.ReactElement => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [sliderRef, slider] = useKeenSlider<HTMLDivElement>({
    initial: 0,
    slideChanged(s) {
      setCurrentSlide(s.details().relativeSlide);
    },
  });

  return (
    <div className={className}>
      <div className={styles['navigation-wrapper']}>
        <div ref={sliderRef} className="keen-slider">
          {Children.map(children, (child) => (
            <div className="keen-slider__slide">{child}</div>
          ))}
        </div>
        {slider && (
          <>
            <ArrowLeft
              onClick={() => {
                slider.prev();
              }}
              disabled={currentSlide === 0}
            />
            <ArrowRight
              onClick={() => {
                slider.next();
              }}
              disabled={currentSlide === slider.details().size - 1}
            />
          </>
        )}
      </div>
      {slider && (
        <div className={styles['dots']}>
          {new Array(slider.details().size).map((detail, idx) => {
            return (
              <button
                key={idx}
                onClick={() => {
                  slider.moveToSlideRelative(idx);
                }}
                className={styles['dot'] + ' ' + (currentSlide === idx ? styles['active'] : '')}
              />
            );
          })}
        </div>
      )}
    </div>
  );
};

function ArrowLeft(props: { disabled: boolean; onClick: () => void }): React.ReactElement {
  const disabled = props.disabled ? styles['arrow--disabled'] : '';
  return (
    <HiChevronLeft
      onClick={props.onClick}
      className={`${styles['arrow']} ${styles['arrow--left']} ${disabled}`}
    />
  );
}

function ArrowRight(props: { disabled: boolean; onClick: () => void }): React.ReactElement {
  const disabled = props.disabled ? styles['arrow--disabled'] : '';
  return (
    <HiChevronRight
      onClick={props.onClick}
      className={`${styles['arrow']} ${styles['arrow--right']} ${disabled}`}
    />
  );
}

export default WKeenSlider;
