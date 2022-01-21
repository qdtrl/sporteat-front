import { useIntersectionObserver } from 'react-intersection-observer-hook';

const Observed = (props) => {

    const [ref, { entry }] = useIntersectionObserver();
    const isVisible = entry && entry.isIntersecting;

    return (
        <div className={` card-section ${isVisible? "card-section-scrolled" : ""}`} ref={ref}>
            {props.children}
        </div>
    )

};
export default Observed;