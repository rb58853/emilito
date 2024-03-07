import SerieContainerDesktop from "./desktop-view/SerieContainer-desktop"
import SerieContainerMobile from "./mobile-view/SerieContainer-mobile"

function SerieContainer({ items }) {
    return (
        <div>
            <SerieContainerDesktop items={items} />
            <SerieContainerMobile items={items} />
        </div>
    )
}
export default SerieContainer